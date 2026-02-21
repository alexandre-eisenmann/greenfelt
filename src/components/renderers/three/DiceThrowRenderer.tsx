import { useEffect, useRef, useState, useCallback, type PointerEvent as ReactPointerEvent } from "react"
import * as CANNON from "cannon-es"
import * as THREE from "three"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import { DiceAudio } from "./diceAudio"

type DieEntity = {
  mesh: THREE.Mesh
  body: CANNON.Body
  locked: boolean
}

export type RollSpeedMode = "normal" | "fast"
const HOLD_TO_SLOW_MS = 200

type DiceThrowProps = {
  diceCount?: number
  maxAttempts?: number
  onDiceResult?: (result: { total: number; values: number[]; attempt: number }) => void
  onRollStart?: () => void
  forceSingleAttempt?: boolean
  hasPendingPlacement?: boolean
  onCommitPlacement?: () => void
  rollSpeedMode?: RollSpeedMode
}

const DIE_SIZE_DESKTOP = 1.36
const DIE_SIZE_MOBILE = 2
const CAMERA_HALF_HEIGHT_DESKTOP = 6.8
const CAMERA_HALF_HEIGHT_MOBILE = 6.0
const WALL_THICKNESS = 0.9
const WALL_HEIGHT = 8
const TABLE_GREEN = 0x1a7a4a

const FACE_VALUE_BY_MATERIAL_INDEX = [3, 4, 1, 6, 2, 5]
const PLAY_BUTTON_DIAMETER_PX = 56
const PLAY_BUTTON_PRESS_SIZE_BOOST_PX = 50

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
const FACE_NORMALS = [
  new CANNON.Vec3(1, 0, 0),
  new CANNON.Vec3(-1, 0, 0),
  new CANNON.Vec3(0, 1, 0),
  new CANNON.Vec3(0, -1, 0),
  new CANNON.Vec3(0, 0, 1),
  new CANNON.Vec3(0, 0, -1),
]

type RollProfile = {
  settleHoldSeconds: number
  linearStillThreshold: number
  angularStillThreshold: number
  maxRollSeconds: number | null
  timeoutGraceSeconds: number
  timeoutFaceHoldSeconds: number
  timeoutLinearStillThreshold: number
  timeoutAngularStillThreshold: number
  gravityY: number
  faceUpDrop: boolean
  spawnYBase: number
  spawnYStep: number
  solverIterations: number
  tableRestitution: number
  diceRestitution: number
  sleepSpeedLimit: number
  sleepTimeLimit: number
  linearDamping: number
  angularDamping: number
  impulseXMin: number
  impulseXMax: number
  impulseYMin: number
  impulseYMax: number
}

function profileForMode(mode: RollSpeedMode): RollProfile {
  if (mode === "fast") {
    return {
      settleHoldSeconds: 0.03,
      linearStillThreshold: 0.14,
      angularStillThreshold: 0.18,
      maxRollSeconds: 0.7,
      timeoutGraceSeconds: 0.45,
      timeoutFaceHoldSeconds: 0.1,
      timeoutLinearStillThreshold: 0.22,
      timeoutAngularStillThreshold: 0.26,
      gravityY: -130,
      faceUpDrop: true,
      spawnYBase: 9.5,
      spawnYStep: 0.34,
      solverIterations: 6,
      tableRestitution: 0.14,
      diceRestitution: 0.16,
      sleepSpeedLimit: 0.36,
      sleepTimeLimit: 0.05,
      linearDamping: 0.4,
      angularDamping: 0.46,
      impulseXMin: 8.5,
      impulseXMax: 10.6,
      impulseYMin: 3.2,
      impulseYMax: 4.3,
    }
  }

  return {
    settleHoldSeconds: 0.26,
    linearStillThreshold: 0.02,
    angularStillThreshold: 0.03,
    maxRollSeconds: null,
    timeoutGraceSeconds: 0,
    timeoutFaceHoldSeconds: 0,
    timeoutLinearStillThreshold: 0,
    timeoutAngularStillThreshold: 0,
    gravityY: -40,
    faceUpDrop: false,
    spawnYBase: 4,
    spawnYStep: 0.22,
    solverIterations: 14,
    tableRestitution: 0.36,
    diceRestitution: 0.4,
    sleepSpeedLimit: 0.14,
    sleepTimeLimit: 0.18,
    linearDamping: 0.17,
    angularDamping: 0.19,
    impulseXMin: 12.2,
    impulseXMax: 15.8,
    impulseYMin: 5.4,
    impulseYMax: 7.2,
  }
}

export function DiceThrowRenderer({
  diceCount = 5,
  maxAttempts = 3,
  onDiceResult,
  onRollStart,
  forceSingleAttempt = false,
  hasPendingPlacement = false,
  onCommitPlacement,
  rollSpeedMode = "normal",
}: DiceThrowProps) {
  const hostRef = useRef<HTMLDivElement | null>(null)
  const throwDiceRef = useRef<(modeOverride?: RollSpeedMode) => void>(() => {})
  const parkDiceRef = useRef<() => void>(() => {})
  const rollingRef = useRef(false)
  const [isRolling, setIsRolling] = useState(false)
  const [results, setResults] = useState<number[]>([])
  const resultsRef = useRef<number[]>(results)
  resultsRef.current = results
  // attempt = 0 means no throws yet, 1 = first throw done, etc.
  const [attempt, setAttempt] = useState(0)
  const [locked, setLocked] = useState<boolean[]>(() => Array(diceCount).fill(false))
  const [isPlayPressed, setIsPlayPressed] = useState(false)
  const [isHoldSlowActive, setIsHoldSlowActive] = useState(false)
  const holdToSlowTimerRef = useRef<number | null>(null)
  const holdSlowActivatedRef = useRef(false)
  const lockedRef = useRef(locked)
  lockedRef.current = locked
  const attemptRef = useRef(attempt)
  attemptRef.current = attempt

  const diceRef = useRef<DieEntity[]>([])
  const effectiveMaxAttempts = forceSingleAttempt ? 1 : maxAttempts
  const effectiveMaxAttemptsRef = useRef(effectiveMaxAttempts)
  effectiveMaxAttemptsRef.current = effectiveMaxAttempts
  const onDiceResultRef = useRef(onDiceResult)
  onDiceResultRef.current = onDiceResult
  const onRollStartRef = useRef(onRollStart)
  onRollStartRef.current = onRollStart
  const rollSpeedModeRef = useRef(rollSpeedMode)
  rollSpeedModeRef.current = rollSpeedMode
  const activeRollProfileRef = useRef<RollProfile>(profileForMode(rollSpeedMode))

  const toggleLock = useCallback((index: number) => {
    // Can only lock between throws: at least 1 throw done, and not yet at max
    if (attemptRef.current < 1 || attemptRef.current >= effectiveMaxAttemptsRef.current) return

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
  }, [])

  const onCommitPlacementRef = useRef(onCommitPlacement)
  onCommitPlacementRef.current = onCommitPlacement

  const commitAndThrow = useCallback((modeOverride?: RollSpeedMode) => {
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
    throwDiceRef.current(modeOverride)
  }, [diceCount])

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    const isDesktopViewport =
      typeof window !== "undefined" && window.matchMedia("(min-width: 1024px)").matches
    const dieSize = isDesktopViewport ? DIE_SIZE_DESKTOP : DIE_SIZE_MOBILE
    const dieHalf = dieSize / 2
    const cameraHalfHeight = isDesktopViewport ? CAMERA_HALF_HEIGHT_DESKTOP : CAMERA_HALF_HEIGHT_MOBILE

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
    renderer.domElement.style.touchAction = "manipulation"
    renderer.domElement.style.userSelect = "none"
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
    ;(world.solver as CANNON.GSSolver).iterations = profileForMode("normal").solverIterations
    const tableMaterial = new CANNON.Material("table")
    const diceMaterial = new CANNON.Material("die")
    const diceTableContactMaterial = new CANNON.ContactMaterial(diceMaterial, tableMaterial, {
      friction: 0.24,
      restitution: profileForMode("normal").tableRestitution,
    })
    const diceDiceContactMaterial = new CANNON.ContactMaterial(diceMaterial, diceMaterial, {
      friction: 0.3,
      restitution: profileForMode("normal").diceRestitution,
    })
    world.addContactMaterial(diceTableContactMaterial)
    world.addContactMaterial(diceDiceContactMaterial)

    const floorBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane(),
      material: tableMaterial,
    })
    floorBody.quaternion.setFromEuler(-Math.PI / 2, 0, 0)
    world.addBody(floorBody)

    const diceGeometry = new RoundedBoxGeometry(dieSize, dieSize, dieSize, 6, 0.16)

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
        shape: new CANNON.Box(new CANNON.Vec3(dieHalf, dieHalf, dieHalf)),
        material: diceMaterial,
        sleepSpeedLimit: profileForMode("normal").sleepSpeedLimit,
        sleepTimeLimit: profileForMode("normal").sleepTimeLimit,
      })
      body.linearDamping = profileForMode("normal").linearDamping
      body.angularDamping = profileForMode("normal").angularDamping
      body.allowSleep = true
      world.addBody(body)

      dice.push({ mesh, body, locked: false })
    }
    diceRef.current = dice

    // ── collision audio ──────────────────────────────────────────
    const audio = new DiceAudio()
    const diceBodySet = new Set(dice.map((d) => d.body))
    const unlockAudio = () => audio.unlock()
    window.addEventListener("pointerdown", unlockAudio, { passive: true })
    window.addEventListener("touchstart", unlockAudio, { passive: true })
    window.addEventListener("click", unlockAudio, { passive: true })

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
      audio.unlock()
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
      const bumperSize = dieSize * 1.8
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
      const halfH = cameraHalfHeight
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
    let rollElapsed = 0
    let timeoutReached = false
    let timeoutFaceStableFor = 0
    let timeoutFaces: number[] | null = null

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

    const throwDice = (modeOverride?: RollSpeedMode) => {
      if (rollingRef.current) return
      if (attemptRef.current >= effectiveMaxAttemptsRef.current) return

      const profile = profileForMode(modeOverride ?? rollSpeedModeRef.current)
      activeRollProfileRef.current = profile
      ;(world.solver as CANNON.GSSolver).iterations = profile.solverIterations
      world.gravity.set(0, profile.gravityY, 0)
      diceTableContactMaterial.restitution = profile.tableRestitution
      diceDiceContactMaterial.restitution = profile.diceRestitution

      audio.unlock()
      rollingRef.current = true
      setIsRolling(true)
      onRollStartRef.current?.()
      settledFor = 0
      rollElapsed = 0
      timeoutReached = false
      timeoutFaceStableFor = 0
      timeoutFaces = null

      const currentLocked = lockedRef.current
      const isFirstThrow = attemptRef.current === 0
      const startX = bounds.minX + dieSize * 0.8
      const fastMinX = bounds.minX + dieSize
      const fastMaxX = bounds.maxX - dieSize
      const fastMinZ = bounds.minZ + dieSize
      const fastMaxZ = bounds.maxZ - dieSize
      const usedFastSpawns: Array<{ x: number; z: number }> = []

      let unlockedIndex = 0
      dice.forEach((die, index) => {
        die.body.sleepSpeedLimit = profile.sleepSpeedLimit
        die.body.sleepTimeLimit = profile.sleepTimeLimit
        die.body.linearDamping = profile.linearDamping
        die.body.angularDamping = profile.angularDamping

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

        const xSpacing = 0.56
        const fastSpawn = profile.faceUpDrop
          ? sampleFastSpawnPoint({
              minX: fastMinX,
              maxX: fastMaxX,
              minZ: fastMinZ,
              maxZ: fastMaxZ,
              existing: usedFastSpawns,
              minDistance: dieSize * 0.95,
            })
          : null
        const spawnX = profile.faceUpDrop
          ? fastSpawn!.x
          : startX + unlockedIndex * xSpacing + randomRange(-0.1, 0.1)
        const spawnY = profile.spawnYBase + unlockedIndex * profile.spawnYStep
        const spawnYWithJitter = profile.faceUpDrop
          ? spawnY + randomRange(-0.6, 0.8)
          : spawnY
        const spawnZ = profile.faceUpDrop
          ? fastSpawn!.z
          : randomRange(-bounds.depth * 0.25, bounds.depth * 0.25)
        if (profile.faceUpDrop && fastSpawn) {
          usedFastSpawns.push(fastSpawn)
        }
        die.body.position.set(spawnX, spawnYWithJitter, spawnZ)

        if (profile.faceUpDrop) {
          setDieTopFace(die.body, randomDieValue())
        } else {
          const spin = new CANNON.Quaternion()
          spin.setFromEuler(
            randomRange(0, Math.PI),
            randomRange(0, Math.PI),
            randomRange(0, Math.PI),
            "XYZ",
          )
          die.body.quaternion.copy(spin)
        }

        const impulse = profile.faceUpDrop
          ? (() => {
              const toCenterX = -spawnX
              const toCenterZ = -spawnZ
              const centerLen = Math.hypot(toCenterX, toCenterZ) || 1
              const inward = randomRange(0.9, 2.4)
              const tangentSign = Math.random() < 0.5 ? -1 : 1
              const tangentX = tangentSign * (-toCenterZ / centerLen)
              const tangentZ = tangentSign * (toCenterX / centerLen)
              const tangent = randomRange(0.15, 1.1)
              const jitterX = randomRange(-0.45, 0.45)
              const jitterZ = randomRange(-0.45, 0.45)
              return new CANNON.Vec3(
                (toCenterX / centerLen) * inward + tangentX * tangent + jitterX,
                randomRange(profile.impulseYMin, profile.impulseYMax),
                (toCenterZ / centerLen) * inward + tangentZ * tangent + jitterZ,
              )
            })()
          : new CANNON.Vec3(
              randomRange(profile.impulseXMin, profile.impulseXMax),
              randomRange(profile.impulseYMin, profile.impulseYMax),
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
        keepBodyInside(die.body, bounds, dieHalf)
        die.mesh.position.set(die.body.position.x, die.body.position.y, die.body.position.z)
        die.mesh.quaternion.set(
          die.body.quaternion.x,
          die.body.quaternion.y,
          die.body.quaternion.z,
          die.body.quaternion.w,
        )
      })

      if (rollingRef.current) {
        const activeRollProfile = activeRollProfileRef.current
        rollElapsed += dt
        const currentLocked = lockedRef.current
        const finalizeRoll = (faceValuesOverride?: number[]) => {
          rollingRef.current = false
          setIsRolling(false)
          const faceValues = faceValuesOverride ?? dice.map((die) => readTopFace(die.body))
          setResults(faceValues)
          const nextAttempt = attemptRef.current + 1
          if (nextAttempt >= effectiveMaxAttemptsRef.current) {
            const allLocked = Array(diceCount).fill(true)
            setLocked(allLocked)
            lockedRef.current = allLocked
            dice.forEach((die) => {
              const materials = die.mesh.material as THREE.MeshStandardMaterial[]
              materials.forEach((m) => m.color.set(LOCKED_COLOR))
            })
          }
          setAttempt((prev) => prev + 1)
          const total = faceValues.reduce((sum, v) => sum + v, 0)
          onDiceResultRef.current?.({
            total,
            values: faceValues,
            attempt: nextAttempt,
          })
        }

        if (activeRollProfile.maxRollSeconds != null) {
          if (!timeoutReached && rollElapsed >= activeRollProfile.maxRollSeconds) {
            timeoutReached = true
            timeoutFaceStableFor = 0
            timeoutFaces = null
          }

          if (timeoutReached) {
            const currentFaces = dice.map((die) => readTopFace(die.body))
            const sameFaces =
              timeoutFaces != null &&
              currentFaces.every((value, i) => currentLocked[i] || value === timeoutFaces![i])
            timeoutFaces = currentFaces

            const timeoutStable = dice.every((die, i) => {
              if (currentLocked[i]) return true
              if (die.body.sleepState === CANNON.Body.SLEEPING) return true
              const linearStill =
                die.body.velocity.lengthSquared() < activeRollProfile.timeoutLinearStillThreshold
              const angularStill =
                die.body.angularVelocity.lengthSquared() < activeRollProfile.timeoutAngularStillThreshold
              return linearStill && angularStill && die.body.position.y <= dieHalf + 0.14
            })

            if (sameFaces && timeoutStable) {
              timeoutFaceStableFor += dt
              if (timeoutFaceStableFor >= activeRollProfile.timeoutFaceHoldSeconds) {
                finalizeRoll(currentFaces)
                settledFor = 0
                renderer.render(scene, camera)
                raf = window.requestAnimationFrame(animate)
                return
              }
            } else {
              timeoutFaceStableFor = 0
            }

            if (
              rollElapsed >=
              activeRollProfile.maxRollSeconds + activeRollProfile.timeoutGraceSeconds
            ) {
              // Hard timeout: freeze in-place to avoid any visual reorientation/teleport.
              dice.forEach((die, i) => {
                if (currentLocked[i]) return
                die.body.velocity.set(0, 0, 0)
                die.body.angularVelocity.set(0, 0, 0)
                die.body.sleep()
              })
              finalizeRoll(currentFaces)
              settledFor = 0
              renderer.render(scene, camera)
              raf = window.requestAnimationFrame(animate)
              return
            }
          }
        }

        const allStable = dice.every((die, i) => {
          if (currentLocked[i]) return true
          if (die.body.sleepState === CANNON.Body.SLEEPING) return true
          const linearStill = die.body.velocity.lengthSquared() < activeRollProfile.linearStillThreshold
          const angularStill = die.body.angularVelocity.lengthSquared() < activeRollProfile.angularStillThreshold
          return linearStill && angularStill && die.body.position.y <= dieHalf + 0.08
        })

        if (allStable) {
          settledFor += dt
          if (settledFor > activeRollProfile.settleHoldSeconds) {
            finalizeRoll()
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
      window.removeEventListener("pointerdown", unlockAudio)
      window.removeEventListener("touchstart", unlockAudio)
      window.removeEventListener("click", unlockAudio)
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
  }, [diceCount, toggleLock])

  const total = results.reduce((sum, v) => sum + v, 0)
  const turnOver = attempt >= effectiveMaxAttempts && !isRolling
  const canThrow = !isRolling && (attempt < effectiveMaxAttempts || hasPendingPlacement)
  const canLock = attempt >= 1 && attempt < effectiveMaxAttempts
  const playButtonPressed = isPlayPressed && canThrow
  const pressScaleBase = (PLAY_BUTTON_DIAMETER_PX + PLAY_BUTTON_PRESS_SIZE_BOOST_PX) / PLAY_BUTTON_DIAMETER_PX
  const playButtonScale = playButtonPressed ? (isHoldSlowActive ? pressScaleBase + 0.08 : pressScaleBase) : 1
  const playButtonTranslateY = playButtonPressed ? 1 : 0
  const sortedIndicators = results
    .map((value, index) => ({ value, index, isLocked: locked[index] }))
    .sort((a, b) => a.value - b.value || a.index - b.index)

  const clearHoldToSlowTimer = useCallback(() => {
    if (holdToSlowTimerRef.current == null) return
    window.clearTimeout(holdToSlowTimerRef.current)
    holdToSlowTimerRef.current = null
  }, [])

  const resetPlayHoldState = useCallback(() => {
    clearHoldToSlowTimer()
    holdSlowActivatedRef.current = false
    setIsHoldSlowActive(false)
    setIsPlayPressed(false)
  }, [clearHoldToSlowTimer])

  const startPlayPress = useCallback(
    (event: ReactPointerEvent<HTMLButtonElement>) => {
      if (!canThrow || event.button !== 0) return
      event.preventDefault()
      setIsPlayPressed(true)
      setIsHoldSlowActive(false)
      holdSlowActivatedRef.current = false
      clearHoldToSlowTimer()
      holdToSlowTimerRef.current = window.setTimeout(() => {
        holdSlowActivatedRef.current = true
        setIsHoldSlowActive(true)
      }, HOLD_TO_SLOW_MS)
      event.currentTarget.setPointerCapture(event.pointerId)
    },
    [canThrow, clearHoldToSlowTimer],
  )

  const releasePlayPress = useCallback(() => {
    if (!isPlayPressed) return
    const useSlowOverride = holdSlowActivatedRef.current
    resetPlayHoldState()
    if (!canThrow) return
    if (hasPendingPlacement) {
      commitAndThrow(useSlowOverride ? "normal" : undefined)
      return
    }
    throwDiceRef.current(useSlowOverride ? "normal" : undefined)
  }, [canThrow, commitAndThrow, hasPendingPlacement, isPlayPressed, resetPlayHoldState])

  useEffect(() => {
    return () => {
      clearHoldToSlowTimer()
    }
  }, [clearHoldToSlowTimer])

  return (
    <div className="flex h-full w-full flex-col">
      <div className="relative min-h-0 flex-1 overflow-hidden rounded-none bg-[#1a7a4a]">
        <div ref={hostRef} className="h-full w-full" />
      </div>

      <div className="relative flex items-center justify-between px-2 py-0" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="relative flex h-8 items-center gap-2 pr-20">
          {results.length > 0 ? (
            <>
              <div className="flex items-center gap-1">
                {sortedIndicators.map((die) => (
                  <button
                    type="button"
                    key={die.index}
                    onClick={() => canLock && toggleLock(die.index)}
                    className={`grid h-7 w-7 select-none place-items-center rounded-lg border text-base font-bold leading-none transition-colors ${
                      die.isLocked
                        ? "border-red-400 bg-red-100 text-red-800"
                        : "border-slate-300 bg-white text-slate-800"
                    } ${canLock ? "cursor-pointer touch-manipulation hover:border-slate-400 active:scale-95" : ""}`}
                    aria-label={`Die ${die.index + 1}`}
                  >
                    {die.value}
                  </button>
                ))}
              </div>
              <div className="pointer-events-none inline-flex w-[42px] items-center justify-start gap-1">
                {isRolling ? (
                  <span className="inline-flex items-center gap-1 text-slate-500" aria-label="Rolling">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" style={{ animationDelay: "0ms", animationDuration: "900ms" }} />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" style={{ animationDelay: "150ms", animationDuration: "900ms" }} />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" style={{ animationDelay: "300ms", animationDuration: "900ms" }} />
                  </span>
                ) : (
                  <>
                    <span className="text-sm font-medium text-slate-400">=</span>
                    <span className="text-lg font-bold leading-none text-slate-800">{total}</span>
                  </>
                )}
              </div>
              <span
                className={`ml-1 inline-flex h-6 w-[74px] -translate-x-2 items-center justify-center rounded-full bg-slate-200 px-2 text-xs font-bold tabular-nums text-slate-600 ${
                  attempt > 0 ? "" : "opacity-0"
                }`}
              >
                {attempt > 0 ? (
                  turnOver && !hasPendingPlacement ? "PLACE" : `${attempt} of ${effectiveMaxAttempts}`
                ) : (
                  "0 of 0"
                )}
              </span>
            </>
          ) : (
            <>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="grid h-7 w-7 place-items-center rounded-lg border border-transparent text-base leading-none"
                  />
                ))}
              </div>
              <div className="pointer-events-none inline-flex w-[42px] items-center justify-start gap-1">
                {isRolling ? (
                  <span className="inline-flex items-center gap-1 text-slate-500" aria-label="Rolling">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" style={{ animationDelay: "0ms", animationDuration: "900ms" }} />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" style={{ animationDelay: "150ms", animationDuration: "900ms" }} />
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-current" style={{ animationDelay: "300ms", animationDuration: "900ms" }} />
                  </span>
                ) : (
                  <>
                    <span className="text-sm font-medium text-transparent">=</span>
                    <span className="text-lg font-bold leading-none text-transparent">00</span>
                  </>
                )}
              </div>
              <span className="ml-1 inline-flex h-6 w-[74px] -translate-x-2 items-center justify-center rounded-full bg-slate-200 px-2 text-xs font-bold tabular-nums text-slate-600 opacity-0">
                0 of 0
              </span>
            </>
          )}
        </div>
        {(!turnOver || hasPendingPlacement) && (
          <div className="absolute right-2 -top-6 z-20 h-14 w-14">
            {isHoldSlowActive && (
              <>
                <span
                  className="pointer-events-none absolute inset-0 z-0 rounded-full animate-pulse"
                  style={{
                    animationDuration: "1800ms",
                    transform: `translateY(${playButtonTranslateY}px) scale(${playButtonScale})`,
                    boxShadow: "0 0 0 16px rgba(252, 211, 77, 0.9)",
                  }}
                />
                <span
                  className="pointer-events-none absolute inset-0 z-0 rounded-full animate-pulse"
                  style={{
                    animationDuration: "1800ms",
                    transform: `translateY(${playButtonTranslateY}px) scale(${playButtonScale})`,
                    boxShadow: "0 0 28px 20px rgba(252, 211, 77, 0.26)",
                  }}
                />
              </>
            )}
            <button
              aria-disabled={!canThrow}
              onPointerDown={startPlayPress}
              onPointerUp={releasePlayPress}
              onPointerCancel={resetPlayHoldState}
              className={`relative z-10 h-14 w-14 touch-manipulation select-none appearance-none rounded-full border-2 text-center text-[10px] font-bold uppercase tracking-widest shadow-md transition-[transform,colors,box-shadow,filter] duration-100 ${
                canThrow
                  ? "cursor-pointer border-red-600 bg-red-500 text-white hover:bg-red-500"
                  : "cursor-not-allowed border-red-300 bg-red-300 text-white"
              }`}
              style={{
                WebkitTapHighlightColor: "transparent",
                WebkitUserSelect: "none",
                userSelect: "none",
                WebkitTouchCallout: "none",
                transform: `translateY(${playButtonTranslateY}px) scale(${playButtonScale})`,
                filter: playButtonPressed ? "brightness(1.03)" : "none",
                boxShadow: isHoldSlowActive
                  ? "0 0 0 2px rgba(0,0,0,0.16), 0 12px 24px rgba(0,0,0,0.34)"
                  : "0 0 0 2px rgba(0,0,0,0.16), 0 8px 16px rgba(0,0,0,0.28)",
              }}
              title={isHoldSlowActive ? "SLOW active" : "Hold for SLOW"}
            >
              <span
                className="text-[11px] font-extrabold"
                style={{ textShadow: "0 1px 1px rgba(0,0,0,0.28)" }}
              >
                PLAY
              </span>
            </button>
          </div>
        )}
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

function randomDieValue(): number {
  return 1 + Math.floor(Math.random() * 6)
}

function sampleFastSpawnPoint({
  minX,
  maxX,
  minZ,
  maxZ,
  existing,
  minDistance,
}: {
  minX: number
  maxX: number
  minZ: number
  maxZ: number
  existing: Array<{ x: number; z: number }>
  minDistance: number
}): { x: number; z: number } {
  const attempts = 18
  for (let i = 0; i < attempts; i += 1) {
    const candidate = {
      x: randomRange(minX, maxX),
      z: randomRange(minZ, maxZ),
    }
    const tooClose = existing.some((p) => Math.hypot(p.x - candidate.x, p.z - candidate.z) < minDistance)
    if (!tooClose) return candidate
  }

  return {
    x: randomRange(minX, maxX),
    z: randomRange(minZ, maxZ),
  }
}

function setDieTopFace(body: CANNON.Body, value: number): void {
  const index = FACE_VALUE_BY_MATERIAL_INDEX.indexOf(value)
  const faceNormal = FACE_NORMALS[index >= 0 ? index : 0]
  const from = new THREE.Vector3(faceNormal.x, faceNormal.y, faceNormal.z)
  const up = new THREE.Vector3(0, 1, 0)
  const align = new THREE.Quaternion().setFromUnitVectors(from, up)
  const twist = new THREE.Quaternion().setFromAxisAngle(up, randomRange(0, Math.PI * 2))
  const q = twist.multiply(align)
  body.quaternion.set(q.x, q.y, q.z, q.w)
}

/** Read the top face value of a settled die by checking which face normal points most upward. */
function readTopFace(body: CANNON.Body): number {
  const faceValues = FACE_VALUE_BY_MATERIAL_INDEX

  let bestDot = -Infinity
  let bestValue = 1
  const worldNormal = new CANNON.Vec3()

  for (let i = 0; i < 6; i++) {
    body.quaternion.vmult(FACE_NORMALS[i], worldNormal)
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
  dieHalf: number,
): void {
  const minX = bounds.minX + dieHalf
  const maxX = bounds.maxX - dieHalf
  const minZ = bounds.minZ + dieHalf
  const maxZ = bounds.maxZ - dieHalf

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
