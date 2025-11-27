import { useEffect, useRef } from "react"
import * as THREE from "three"
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader"

export function Panorama360() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const w = container.clientWidth
    const h = container.clientHeight
    const scene = new THREE.Scene()

    // Camera at center of sphere
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
    camera.position.set(0, 0, 0.1)

    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(w, h)
    container.appendChild(renderer.domElement)

    // Sphere for panorama
    const geometry = new THREE.SphereGeometry(500, 60, 40)
    geometry.scale(-1, 1, 1) // Flip normals for interior

    // Load PNG texture
    const texture = new THREE.TextureLoader().load("/lovable-uploads/opd-watch2.png")
    const material = new THREE.MeshBasicMaterial({ map: texture })

    const sphere = new THREE.Mesh(geometry, material)
    scene.add(sphere)

    // Camera controls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.autoRotate = true // Enable automatic camera rotation
    controls.autoRotateSpeed = 1.5 // (Optional) Adjust speed - 1.0 is default
    controls.enableZoom = false
    controls.enablePan = false
    controls.target.set(0, 0, 0)
    controls.update()

    function animate() {
      controls.update()
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      renderer.dispose()
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      ref={containerRef}
    />
  )
}

export function RotatingImage() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const w = window.innerWidth
    const h = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, w / h, 0.1, 1000)
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(w, h)
    mount.appendChild(renderer.domElement)

    // Create Plane with Texture
    const geometry = new THREE.PlaneGeometry(1, 1) // 1x1 size, adjust as needed
    const texture = new THREE.TextureLoader().load("/lovable-uploads/opd-watch2.png")
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true })
    const plane = new THREE.Mesh(geometry, material)
    scene.add(plane)

    // Animation loop to rotate
    function animate() {
      plane.rotation.z += 0.01 // Rotate clockwise, change axis as needed
      renderer.render(scene, camera)
      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      renderer.dispose()
      while (mount.firstChild) {
        mount.removeChild(mount.firstChild)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  )
}

export function Rotating3DImage() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true })
    renderer.setSize(width, height)
    mount.appendChild(renderer.domElement)

    const geometry = new THREE.PlaneGeometry(3, 3)
    const texture = new THREE.TextureLoader().load("/lovable-uploads/opd-watch2.png")
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true })
    const plane = new THREE.Mesh(geometry, material)

    scene.add(plane)

    // Rotation variables for 3D effect
    // let rotationSpeedX = 0.01
    let rotationSpeedY = 0.01

    function animate() {
      requestAnimationFrame(animate)

      // Rotate on X and Y axes
      // plane.rotation.x += rotationSpeedX
      plane.rotation.y += rotationSpeedY

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      renderer.dispose()
      while (mount.firstChild) {
        mount.removeChild(mount.firstChild)
      }
    }
  }, [])

  return (
    <div
      ref={mountRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  )
}

export function VolumeEffect() {
  const containerRef = useRef()

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    )
    camera.position.z = 2

    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    containerRef.current.appendChild(renderer.domElement)

    // Load the texture (PNG)
    const texture = new THREE.TextureLoader().load("/lovable-uploads/opd-watch2.png")

    const layersCount = 20 // number of layers
    const layers = []

    for (let i = 0; i < layersCount; i++) {
      const material = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 1 / layersCount, // semi-transparent
      })

      const plane = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), material)
      plane.position.z = (i - layersCount / 2) * 0.02 // offset in Z
      scene.add(plane)
      layers.push(plane)
    }

    // Animate: rotate the whole scene or object
    function animate() {
      requestAnimationFrame(animate)
      scene.rotation.y += 0.005 // rotate around Y
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      renderer.dispose()
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  )
}

export default function RotatingSVG() {
  const containerRef = useRef()
  const groupRef = useRef(new THREE.Group())

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const width = window.innerWidth
    const height = window.innerHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
    camera.position.z = 5

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    container.appendChild(renderer.domElement)

    // Load SVG and convert to mesh group
    const loader = new SVGLoader()
    loader.load("/lovable-uploads/placeholder.svg", (data) => {
      const paths = data.paths

      paths.forEach((path) => {
        const shapes = path.toShapes(true)

        shapes.forEach((shape) => {
          const geometry = new THREE.ShapeGeometry(shape)
          const material = new THREE.MeshBasicMaterial({
            color: path.color,
            side: THREE.DoubleSide,
            depthWrite: false,
          })

          const mesh = new THREE.Mesh(geometry, material)
          groupRef.current.add(mesh)
        })
      })
      scene.add(groupRef.current)
    })

    // Animation loop to rotate group in 3D space
    function animate() {
      requestAnimationFrame(animate)
      if (groupRef.current) {
        // groupRef.current.rotation.x += 0.01
        groupRef.current.rotation.y += 0.01
      }
      renderer.render(scene, camera)
    }
    animate()

    return () => {
      renderer.dispose()
      while (container.firstChild) {
        container.removeChild(container.firstChild)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ width: "100vw", height: "100vh" }}
    />
  )
}
