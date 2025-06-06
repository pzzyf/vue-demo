<script setup>
import * as THREE from 'three'

let scene = null
let camera = null
const cubes = []
let renderer = null

function createCube(position, color) {
  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshPhongMaterial({ color })
  const cube = new THREE.Mesh(geometry, material)
  cube.position.x = position
  return cube
}

function init() {
  scene = new THREE.Scene()

  const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 1)
  directionalLight.position.set(5, 5, 5)
  scene.add(directionalLight)

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10)
  camera.position.z = 5

  const colors = ['red', 'blue', 'green']
  const positions = [-2, 0, 2]

  positions.forEach((position, index) => {
    const cube = createCube(position, colors[index])
    cubes.push(cube)
    scene.add(cube)
  })

  scene.add(cubes)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('container').appendChild(renderer.domElement)
}

function animate() {
  requestAnimationFrame(animate)

  cubes.forEach((cube) => {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
  })

  renderer.render(scene, camera)
}

onMounted(() => {
  init()
  animate()
})
</script>

<template>
  <div id="container" />
</template>

<style lang="scss" scoped></style>
