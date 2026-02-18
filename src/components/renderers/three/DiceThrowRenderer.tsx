import { useEffect, useRef, useState } from "react"
import * as CANNON from "cannon-es"
import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import { DiceAudio } from "./diceAudio"

type DieEntity = {
  mesh: THREE.Mesh
  body: CANNON.Body
}

const DICE_COUNT = 5
const DIE_SIZE = 1.36
const DIE_HALF = DIE_SIZE / 2

const CAMERA_HALF_HEIGHT = 6.8
const WALL_THICKNESS = 0.9
const WALL_HEIGHT = 8
const TABLE_GREEN = 0x146b44

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

export function DiceThrowRenderer() {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const throwDiceRef = useRef<() => void>(() => {})
  const rollingRef = useRef(false)
  const [isRolling, setIsRolling] = useState(true)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const scene = new THREE.Scene()
    scene.background = null

    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 80)
    camera.position.set(0, 14, 0)
    camera.up.set(0, 0, -1)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.04
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.domElement.style.width = "100%"
    renderer.domElement.style.height = "100%"
    renderer.domElement.style.display = "block"
    host.appendChild(renderer.domElement)

    const ambient = new THREE.HemisphereLight(0xf4f9ff, 0x16302a, 0.58)
    scene.add(ambient)

    const topLight = new THREE.DirectionalLight(0xffffff, 0.72)
    topLight.position.set(0, 18, 0)
    topLight.castShadow = true
    topLight.shadow.mapSize.width = 2048
    topLight.shadow.mapSize.height = 2048
    topLight.shadow.camera.near = 1
    topLight.shadow.camera.far = 35
    topLight.shadow.camera.left = -10
    topLight.shadow.camera.right = 10
    topLight.shadow.camera.top = 10
    topLight.shadow.camera.bottom = -10
    scene.add(topLight)

    const fill = new THREE.DirectionalLight(0x94b7a9, 0.16)
    fill.position.set(-4, 10, 4)
    scene.add(fill)

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
    const diceMaterials = FACE_VALUE_BY_MATERIAL_INDEX.map((value) =>
      new THREE.MeshStandardMaterial({
        map: createFaceTexture(value),
        color: 0xf6f8fb,
        roughness: 0.9,
        metalness: 0.0,
        envMapIntensity: 0.0,
      }),
    )

    const dice: DieEntity[] = []
    for (let i = 0; i < DICE_COUNT; i += 1) {
      const mesh = new THREE.Mesh(diceGeometry, diceMaterials)
      mesh.castShadow = true
      mesh.receiveShadow = true
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

      dice.push({ mesh, body })
    }

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
    }

    const observer = new ResizeObserver(resize)
    observer.observe(host)
    resize()

    let settledFor = 0

    const throwDice = () => {
      if (rollingRef.current) return
      rollingRef.current = true
      setIsRolling(true)
      settledFor = 0

      const startX = bounds.minX + DIE_SIZE * 0.8
      dice.forEach((die, index) => {
        die.body.wakeUp()
        die.body.velocity.setZero()
        die.body.angularVelocity.setZero()
        die.body.force.setZero()
        die.body.torque.setZero()

        const spawnX = startX + index * 0.56 + randomRange(-0.1, 0.1)
        const spawnY = 4 + index * 0.22
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
      })
    }

    throwDiceRef.current = throwDice
    throwDice()

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
        const allStable = dice.every((die) => {
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
      diceMaterials.forEach((material) => {
        material.map?.dispose()
        material.dispose()
      })

      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#146b44]">
      <div ref={hostRef} className="h-full w-full" />

      <button
        disabled={isRolling}
        onClick={() => throwDiceRef.current()}
        className="absolute bottom-4 right-4 rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-xs uppercase tracking-[0.12em] text-slate-700 shadow-sm transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-45"
      >
        {isRolling ? "Rolling..." : "Throw Dice"}
      </button>
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

  context.fillStyle = "#f6f8fb"
  context.fillRect(0, 0, canvas.width, canvas.height)

  context.lineWidth = 4
  context.strokeStyle = "#d3dce8"
  context.strokeRect(4, 4, canvas.width - 8, canvas.height - 8)

  const pipRadius = 22
  const pips = PIP_LAYOUTS[value]
  context.fillStyle = "#0f172a"
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
