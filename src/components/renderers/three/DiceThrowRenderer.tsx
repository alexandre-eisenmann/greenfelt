import { useEffect, useRef, useState, useCallback } from "react"
import * as CANNON from "cannon-es"
import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import { DiceAudio } from "./diceAudio"

type DieEntity = {
  mesh: THREE.Mesh
  body: CANNON.Body
  locked: boolean
}

type DiceThrowProps = {
  diceCount?: number
  maxAttempts?: number
  onDiceResult?: (result: { total: number; values: number[]; attempt: number }) => void
  hasPendingPlacement?: boolean
  onCommitPlacement?: () => void
}

const DIE_SIZE = 1.36
const DIE_HALF = DIE_SIZE / 2

const CAMERA_HALF_HEIGHT = 6.8
const WALL_THICKNESS = 0.9
const WALL_HEIGHT = 8
const TABLE_GREEN = 0x1a7a4a

const FACE_VALUE_BY_MATERIAL_INDEX = [3, 4, 1, 6, 2, 5]

const PIP_LAYOUTS: Record<number, Array<[number, number]>> = {
  1: [[0, 0]],
  2: [
    [-0.52, -0.52],
    [0.52, 0.52],
  ],
  3: [
    [-0.52, -0.52],
    [0, 0],
    [0.52, 0.52],
  ],
  4: [
    [-0.52, -0.52],
    [0.52, -0.52],
    [-0.52, 0.52],
    [0.52, 0.52],
  ],
  5: [
    [-0.52, -0.52],
    [0.52, -0.52],
    [0, 0],
    [-0.52, 0.52],
    [0.52, 0.52],
  ],
  6: [
    [-0.52, -0.52],
    [0.52, -0.52],
    [-0.52, 0],
    [0.52, 0],
    [-0.52, 0.52],
    [0.52, 0.52],
  ],
}

const UNLOCKED_COLOR = 0xffffff
const LOCKED_COLOR = 0xf28b82

export function DiceThrowRenderer({ diceCount = 5, maxAttempts = 3, onDiceResult, hasPendingPlacement = false, onCommitPlacement }: DiceThrowProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const throwDiceRef = useRef<() => void>(() => {})
  const parkDiceRef = useRef<() => void>(() => {})
  const rollingRef = useRef(false)
  const [isRolling, setIsRolling] = useState(false)
  const [results, setResults] = useState<number[]>([])
  // attempt = 0 means no throws yet, 1 = first throw done, etc.
  const [attempt, setAttempt] = useState(0)
  const [locked, setLocked] = useState<boolean[]>(() => Array(diceCount).fill(false))
  const lockedRef = useRef(locked)
  lockedRef.current = locked
  const attemptRef = useRef(attempt)
  attemptRef.current = attempt

  const diceRef = useRef<DieEntity[]>([])
  const onDiceResultRef = useRef(onDiceResult)
  onDiceResultRef.current = onDiceResult

  const toggleLock = useCallback((index: number) => {
    if (rollingRef.current) return
    // Can only lock between throws: at least 1 throw done, and not yet at max
    if (attemptRef.current < 1 || attemptRef.current >= maxAttempts) return

    setLocked((prev) => {
      const next = [...prev]
      next[index] = !next[index]
      const die = diceRef.current[index]
      if (die) {
        const materials = die.mesh.material as THREE.MeshStandardMaterial[]
        const color = next[index] ? LOCKED_COLOR : UNLOCKED_COLOR
        materials.forEach((m) => m.color.set(color))
      }
      return next
    })
  }, [maxAttempts])

  const newTurn = useCallback(() => {
    setAttempt(0)
    setResults([])
    setLocked(Array(diceCount).fill(false))
    diceRef.current.forEach((die) => {
      const materials = die.mesh.material as THREE.MeshStandardMaterial[]
      materials.forEach((m) => m.color.set(UNLOCKED_COLOR))
    })
    parkDiceRef.current()
  }, [diceCount])

  const onCommitPlacementRef = useRef(onCommitPlacement)
  onCommitPlacementRef.current = onCommitPlacement

  const commitAndThrow = useCallback(() => {
    onCommitPlacementRef.current?.()
    setAttempt(0)
    attemptRef.current = 0
    setResults([])
    const allUnlocked = Array(diceCount).fill(false)
    setLocked(allUnlocked)
    lockedRef.current = allUnlocked
    diceRef.current.forEach((die) => {
      const materials = die.mesh.material as THREE.MeshStandardMaterial[]
      materials.forEach((m) => m.color.set(UNLOCKED_COLOR))
    })
    throwDiceRef.current()
  }, [diceCount])

  const commitAndReset = useCallback(() => {
    onCommitPlacementRef.current?.()
    newTurn()
  }, [newTurn])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(TABLE_GREEN)

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 80)
    camera.position.set(0, 14, 0)
    camera.up.set(0, 0, -1)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.NoToneMapping
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    renderer.domElement.style.display = "block"
    host.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, 0.85)
    scene.add(ambient)

    const topLight = new THREE.DirectionalLight(0xffffff, 1.1)
    topLight.position.set(3, 18, -2)
    topLight.castShadow = true
    topLight.shadow.mapSize.width = 2048
    topLight.shadow.mapSize.height = 2048
    topLight.shadow.camera.near = 1
    topLight.shadow.camera.far = 40
    topLight.shadow.camera.left = -30
    topLight.shadow.camera.right = 30
    topLight.shadow.camera.top = 20
    topLight.shadow.camera.bottom = -20
    scene.add(topLight)

    const tableMesh = new THREE.Mesh(
      new THREE.PlaneGeometry(1, 1),
      new THREE.MeshStandardMaterial({
        color: TABLE_GREEN,
        roughness: 0.96,
        metalness: 0.0,
      }),
    )
    tableMesh.rotation.x = -Math.PI / 2
    tableMesh.position.y = 0
    tableMesh.receiveShadow = true
    scene.add(tableMesh)

    const world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -40, 0),
      allowSleep: true,
    })
    world.broadphase = new CANNON.SAPBroadphase(world)
    ;(world.solver as CANNON.GSSolver).iterations = 14

    const tableMaterial = new CANNON.Material("table")
    const diceMaterial = new CANNON.Material("die")
    world.addContactMaterial(
      new CANNON.ContactMaterial(diceMaterial, tableMaterial, {
        friction: 0.24,
        restitution: 0.36,
      }),
    )
    world.addContactMaterial(
      new CANNON.ContactMaterial(diceMaterial, diceMaterial, {
        friction: 0.3,
        restitution: 0.4,
      }),
    )

    const floorBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
      material: tableMaterial,
    })
    floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
    world.addBody(floorBody)

    const diceGeometry = new RoundedBoxGeometry(DIE_SIZE, DIE_SIZE, DIE_SIZE, 6, 0.16)

    const dice: DieEntity[] = []
    for (let i = 0; i < diceCount; i += 1) {
      const dieMaterials = FACE_VALUE_BY_MATERIAL_INDEX.map((value) =>
        new THREE.MeshStandardMaterial({
          map: createFaceTexture(value),
          color: UNLOCKED_COLOR,
          roughness: 0.38,
          metalness: 0.02,
        }),
      )

      const mesh = new THREE.Mesh(diceGeometry, dieMaterials)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.userData.dieIndex = i
      scene.add(mesh)

      const body = new CANNON.Body({
        mass: 1,
        shape: new CANNON.Box(new CANNON.Vec3(DIE_HALF, DIE_HALF, DIE_HALF)),
        material: diceMaterial,
        sleepSpeedLimit: 0.14,
        sleepTimeLimit: 0.18,
      })
      body.linearDamping = 0.17
      body.angularDamping = 0.19
      body.allowSleep = true
      world.addBody(body)

      dice.push({ mesh, body, locked: false })
    }
    diceRef.current = dice

    // ── collision audio ──────────────────────────────────────────
    const audio = new DiceAudio()
    const diceBodySet = new Set(dice.map((d) => d.body))

    dice.forEach((die) => {
      die.body.addEventListener("collide", (event: { body: CANNON.Body; contact: CANNON.ContactEquation }) => {
        const { body: otherBody, contact } = event
        const speed = Math.abs(contact.getImpactVelocityAlongNormal())

        if (diceBodySet.has(otherBody)) {
          audio.playImpact("dice", speed)
        } else {
          audio.playImpact("table", speed)
        }
      })
    })

    // ── click to lock/unlock ─────────────────────────────────────
    const raycaster = new THREE.Raycaster()
    const pointer = new THREE.Vector2()

    const onPointerDown = (event: PointerEvent) => {
      if (rollingRef.current) return
      const rect = renderer.domElement.getBoundingClientRect()
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
      raycaster.setFromCamera(pointer, camera)

      const meshes = dice.map((d) => d.mesh)
      const intersects = raycaster.intersectObjects(meshes, false)
      if (intersects.length > 0) {
        const hit = intersects[0].object
        const dieIndex = hit.userData.dieIndex as number
        if (dieIndex !== undefined) {
          toggleLock(dieIndex)
        }
      }
    }
    renderer.domElement.addEventListener("pointerdown", onPointerDown)

    let bounds = {
      minX: -6,
      maxX: 6,
      minZ: -3,
      maxZ: 3,
      width: 12,
      depth: 6,
    }

    let wallBodies: CANNON.Body[] = []

    const rebuildWalls = (width: number, depth: number) => {
      wallBodies.forEach((wall) => world.removeBody(wall))
      wallBodies = []

      const sideShape = new CANNON.Box(new CANNON.Vec3(WALL_THICKNESS / 2, WALL_HEIGHT / 2, depth / 2))
      const endShape = new CANNON.Box(new CANNON.Vec3(width / 2, WALL_HEIGHT / 2, WALL_THICKNESS / 2))

      const definitions = [
        {
          shape: sideShape,
          position: new CANNON.Vec3(-width / 2 - WALL_THICKNESS / 2, WALL_HEIGHT / 2, 0),
        },
        {
          shape: sideShape,
          position: new CANNON.Vec3(width / 2 + WALL_THICKNESS / 2, WALL_HEIGHT / 2, 0),
        },
        {
          shape: endShape,
          position: new CANNON.Vec3(0, WALL_HEIGHT / 2, -depth / 2 - WALL_THICKNESS / 2),
        },
        {
          shape: endShape,
          position: new CANNON.Vec3(0, WALL_HEIGHT / 2, depth / 2 + WALL_THICKNESS / 2),
        },
      ]

      definitions.forEach(({ shape, position }) => {
        const wall = new CANNON.Body({
          type: CANNON.Body.STATIC,
          shape,
          material: tableMaterial,
        })
        wall.position.copy(position)
        world.addBody(wall)
        wallBodies.push(wall)
      })

      // Corner bumpers — angled at 45° to deflect dice out of corners
      const bumperSize = DIE_SIZE * 1.8
      const bumperShape = new CANNON.Box(
        new CANNON.Vec3(bumperSize / 2, WALL_HEIGHT / 2, WALL_THICKNESS / 2),
      )
      const hw = width / 2
      const hd = depth / 2
      const corners: { x: number; z: number; angle: number }[] = [
        { x: -hw, z: -hd, angle: Math.PI / 4 },
        { x: hw, z: -hd, angle: -Math.PI / 4 },
        { x: -hw, z: hd, angle: -Math.PI / 4 },
        { x: hw, z: hd, angle: Math.PI / 4 },
      ]
      corners.forEach(({ x, z, angle }) => {
        const bumper = new CANNON.Body({
          type: CANNON.Body.STATIC,
          shape: bumperShape,
          material: tableMaterial,
        })
        bumper.position.set(x, WALL_HEIGHT / 2, z)
        bumper.quaternion.setFromEuler(0, angle, 0)
        world.addBody(bumper)
        wallBodies.push(bumper)
      })
    }

    const resize = () => {
      const widthPx = host.clientWidth
      const heightPx = host.clientHeight
      if (!widthPx || !heightPx) return

      const aspect = widthPx / heightPx
      const halfH = CAMERA_HALF_HEIGHT
      const halfW = halfH * aspect

      camera.left = -halfW
      camera.right = halfW
      camera.top = halfH
      camera.bottom = -halfH
      camera.updateProjectionMatrix()

      const fullWidth = halfW * 2
      const fullDepth = halfH * 2
      tableMesh.scale.set(fullWidth, fullDepth, 1)

      bounds = {
        minX: -fullWidth / 2,
        maxX: fullWidth / 2,
        minZ: -fullDepth / 2,
        maxZ: fullDepth / 2,
        width: fullWidth,
        depth: fullDepth,
      }

      rebuildWalls(fullWidth, fullDepth)

      renderer.setSize(widthPx, heightPx, true)
      renderer.render(scene, camera)
    }

    const observer = new ResizeObserver(resize)
    observer.observe(host)
    resize()

    let settledFor = 0

    // Park all dice below the table (hidden)
    const parkDice = () => {
      dice.forEach((die) => {
        die.body.type = CANNON.Body.STATIC
        die.body.velocity.setZero()
        die.body.angularVelocity.setZero()
        die.body.position.set(0, -10, 0)
        die.mesh.position.set(0, -10, 0)
      })
    }

    const throwDice = () => {
      if (rollingRef.current) return
      if (attemptRef.current >= maxAttempts) return

      rollingRef.current = true
      setIsRolling(true)
      settledFor = 0

      const currentLocked = lockedRef.current
      const isFirstThrow = attemptRef.current === 0
      const startX = bounds.minX + DIE_SIZE * 0.8

      let unlockedIndex = 0
      dice.forEach((die, index) => {
        // On first throw, ignore locks (throw everything)
        if (!isFirstThrow && currentLocked[index]) {
          die.body.type = CANNON.Body.STATIC
          die.body.velocity.setZero()
          die.body.angularVelocity.setZero()
          return
        }

        die.body.type = CANNON.Body.DYNAMIC
        die.body.mass = 1
        die.body.updateMassProperties()
        die.body.wakeUp()
        die.body.velocity.setZero()
        die.body.angularVelocity.setZero()
        die.body.force.setZero()
        die.body.torque.setZero()

        const spawnX = startX + unlockedIndex * 0.56 + randomRange(-0.1, 0.1)
        const spawnY = 4 + unlockedIndex * 0.22
        const spawnZ = randomRange(-bounds.depth * 0.25, bounds.depth * 0.25)
        die.body.position.set(spawnX, spawnY, spawnZ)

        const spin = new CANNON.Quaternion()
        spin.setFromEuler(
          randomRange(0, Math.PI),
          randomRange(0, Math.PI),
          randomRange(0, Math.PI),
          "XYZ",
        )
        die.body.quaternion.copy(spin)

        const impulse = new CANNON.Vec3(
          randomRange(12.2, 15.8),
          randomRange(5.4, 7.2),
          randomRange(-1.2, 1.2),
        )
        const impulseOffset = new CANNON.Vec3(
          randomRange(-0.2, 0.2),
          randomRange(-0.08, 0.08),
          randomRange(-0.2, 0.2),
        )
        die.body.applyImpulse(impulse, impulseOffset)
        unlockedIndex++
      })
    }

    throwDiceRef.current = throwDice
    parkDiceRef.current = parkDice

    // Start with an empty table
    parkDice()

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.code !== "Space") return
      const target = event.target as HTMLElement | null
      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.isContentEditable
      if (isTyping) return
      event.preventDefault()
      throwDice()
    }
    window.addEventListener("keydown", onKeyDown)

    const clock = new THREE.Clock()
    const fixedStep = 1 / 60
    let raf = 0

    const animate = () => {
      const dt = Math.min(clock.getDelta(), 0.04)
      world.step(fixedStep, dt, 4)

      dice.forEach((die) => {
        keepBodyInside(die.body, bounds)
        die.mesh.position.set(die.body.position.x, die.body.position.y, die.body.position.z)
        die.mesh.quaternion.set(
          die.body.quaternion.x,
          die.body.quaternion.y,
          die.body.quaternion.z,
          die.body.quaternion.w,
        )
      })

      if (rollingRef.current) {
        const currentLocked = lockedRef.current
        const allStable = dice.every((die, i) => {
          if (currentLocked[i]) return true
          if (die.body.sleepState === CANNON.Body.SLEEPING) return true
          const linearStill = die.body.velocity.lengthSquared() < 0.02
          const angularStill = die.body.angularVelocity.lengthSquared() < 0.03
          return linearStill && angularStill && die.body.position.y <= DIE_HALF + 0.08
        })

        if (allStable) {
          settledFor += dt
          if (settledFor > 0.26) {
            rollingRef.current = false
            setIsRolling(false)
            const faceValues = dice.map((die) => readTopFace(die.body))
            setResults(faceValues)
            setAttempt((prev) => prev + 1)
            const total = faceValues.reduce((sum, v) => sum + v, 0)
            onDiceResultRef.current?.({
              total,
              values: faceValues,
              attempt: attemptRef.current + 1,
            })
          }
        } else {
          settledFor = 0
        }
      }

      renderer.render(scene, camera)
      raf = window.requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.cancelAnimationFrame(raf)
      observer.disconnect()
      window.removeEventListener("keydown", onKeyDown)
      renderer.domElement.removeEventListener("pointerdown", onPointerDown)
      audio.dispose()
      host.removeChild(renderer.domElement)

      wallBodies.forEach((wall) => world.removeBody(wall))
      world.removeBody(floorBody)
      dice.forEach((die) => {
        world.removeBody(die.body)
        scene.remove(die.mesh)
      })

      tableMesh.geometry.dispose()
      ;(tableMesh.material as THREE.Material).dispose()
      scene.remove(tableMesh)

      diceGeometry.dispose()
      dice.forEach((die) => {
        ;(die.mesh.material as THREE.MeshStandardMaterial[]).forEach((m) => {
          m.map?.dispose()
          m.dispose()
        })
      })

      renderer.dispose()
    }
  }, [diceCount, maxAttempts, toggleLock])

  const total = results.reduce((sum, v) => sum + v, 0)
  const turnOver = attempt >= maxAttempts && !isRolling
  const canThrow = !isRolling && attempt < maxAttempts
  const canLock = !isRolling && attempt >= 1 && attempt < maxAttempts

  return (
    <div className="flex h-full w-full flex-col">
      <div className="min-h-0 flex-1 overflow-hidden rounded-3xl bg-[#1a7a4a]">
        <div ref={hostRef} className="h-full w-full" />
      </div>

      <div className="flex items-center justify-between px-2 py-3" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="flex items-center gap-3">
          {results.length > 0 && !isRolling ? (
            <>
              <div className="flex items-center gap-1.5">
                {results.map((value, i) => (
                  <span
                    key={i}
                    onClick={() => canLock && toggleLock(i)}
                    className={`grid h-8 w-8 select-none place-items-center rounded-lg border text-sm font-bold shadow-sm transition-colors ${
                      locked[i]
                        ? "border-red-400 bg-red-100 text-red-800"
                        : "border-slate-300 bg-white text-slate-800"
                    } ${canLock ? "cursor-pointer hover:border-slate-400" : ""}`}
                  >
                    {value}
                  </span>
                ))}
              </div>
              <span className="text-sm font-medium text-slate-400">=</span>
              <span className="text-lg font-bold text-slate-800">{total}</span>
            </>
          ) : (
            <span className="text-sm font-medium text-slate-400">
              {isRolling ? "Rolling..." : ""}
            </span>
          )}
        </div>

        <div className="flex items-center gap-4">
          {!isRolling && attempt > 0 && (
            <span className="text-sm font-semibold text-slate-400">
              {turnOver && !hasPendingPlacement ? "Place on board" : `${attempt} of ${maxAttempts}`}
            </span>
          )}

          {!turnOver ? (
            <button
              disabled={!canThrow}
              onClick={() => {
                if (hasPendingPlacement) {
                  commitAndThrow()
                } else {
                  throwDiceRef.current()
                }
              }}
              className="w-20 rounded-full border border-slate-300 bg-white/90 py-2 text-center text-xs font-bold uppercase tracking-widest text-slate-700 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
            >
              Play
            </button>
          ) : hasPendingPlacement ? (
            <button
              onClick={commitAndReset}
              className="w-24 rounded-full border border-emerald-400 bg-emerald-50 py-2 text-center text-xs font-bold uppercase tracking-widest text-emerald-700 shadow-sm transition hover:bg-emerald-100"
            >
              Confirm
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}

function createFaceTexture(value: number): THREE.CanvasTexture {
  const canvas = document.createElement("canvas")
  canvas.width = 256
  canvas.height = 256

  const context = canvas.getContext("2d")
  if (!context) {
    const fallback = new THREE.CanvasTexture(canvas)
    fallback.colorSpace = THREE.SRGBColorSpace
    return fallback
  }

  context.fillStyle = "#ffffff"
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.lineWidth = 3
  context.strokeStyle = "#e2e8f0"
  context.strokeRect(4, 4, canvas.width - 8, canvas.height - 8)

  const pipRadius = 26
  const pips = PIP_LAYOUTS[value]
  context.fillStyle = "#000000"
  pips.forEach(([xNorm, yNorm]) => {
    const x = canvas.width / 2 + xNorm * 112
    const y = canvas.height / 2 + yNorm * 112
    context.beginPath()
    context.arc(x, y, pipRadius, 0, Math.PI * 2)
    context.fill()
  })

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 4
  texture.minFilter = THREE.LinearMipmapLinearFilter
  texture.magFilter = THREE.LinearFilter
  texture.needsUpdate = true
  return texture
}

function randomRange(min: number, max: number): number {
  return min + Math.random() * (max - min)
}

/** Read the top face value of a settled die by checking which face normal points most upward. */
function readTopFace(body: CANNON.Body): number {
  const faceNormals = [
    new CANNON.Vec3(1, 0, 0),
    new CANNON.Vec3(-1, 0, 0),
    new CANNON.Vec3(0, 1, 0),
    new CANNON.Vec3(0, -1, 0),
    new CANNON.Vec3(0, 0, 1),
    new CANNON.Vec3(0, 0, -1),
  ]
  const faceValues = FACE_VALUE_BY_MATERIAL_INDEX

  let bestDot = -Infinity
  let bestValue = 1
  const worldNormal = new CANNON.Vec3()

  for (let i = 0; i < 6; i++) {
    body.quaternion.vmult(faceNormals[i], worldNormal)
    if (worldNormal.y > bestDot) {
      bestDot = worldNormal.y
      bestValue = faceValues[i]
    }
  }

  return bestValue
}

function keepBodyInside(
  body: CANNON.Body,
  bounds: { minX: number; maxX: number; minZ: number; maxZ: number },
): void {
  const minX = bounds.minX + DIE_HALF
  const maxX = bounds.maxX - DIE_HALF
  const minZ = bounds.minZ + DIE_HALF
  const maxZ = bounds.maxZ - DIE_HALF

  if (body.position.x < minX) {
    body.position.x = minX
    body.velocity.x = Math.abs(body.velocity.x) * 0.55
  } else if (body.position.x > maxX) {
    body.position.x = maxX
    body.velocity.x = -Math.abs(body.velocity.x) * 0.55
  }

  if (body.position.z < minZ) {
    body.position.z = minZ
    body.velocity.z = Math.abs(body.velocity.z) * 0.55
  } else if (body.position.z > maxZ) {
    body.position.z = maxZ
    body.velocity.z = -Math.abs(body.velocity.z) * 0.55
  }
}
