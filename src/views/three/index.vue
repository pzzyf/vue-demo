<script setup>
import * as THREE from 'three'

let scene = null
let camera = null
let cube = null
let renderer = null

function init() {
  scene = new THREE.Scene()

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10)
  camera.position.z = 5

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 'red' })
  cube = new THREE.Mesh(geometry, material)

  scene.add(cube)

  renderer = new THREE.WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.getElementById('container').appendChild(renderer.domElement)

  renderer.render(scene, camera)
}

onMounted(() => {
  init()
})
</script>

<template>
  <div id="container" />
</template>

<style lang="scss" scoped></style>
