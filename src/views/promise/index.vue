<script setup lang="ts">
const a = ref(() => {})

async function test() {
  return () => {
    console.log('123')
  }
}

async function map() {
  a.value = await test()
  a.value()
}

onMounted(() => {
  map()
})
</script>

<template>
  <div />
</template>

<style scoped></style>
