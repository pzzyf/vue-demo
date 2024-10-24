<script setup lang="ts">
const demo1 = computed(() => 1 == 2)

const demo2 = computed(() => {
  return 'demo2'
})

const demo3 = computed(() => [
  {
    a: 'demo3',
  },
])

console.log('demo1 :>> ', demo1.value)
console.log('demo2 :>> ', demo2.value)
console.log('demo3 :>> ', demo3.value)
</script>

<template>
  <div>
    <div>{{ demo1 }}</div>
    <div>{{ demo2 }}</div>
    <div>{{ demo3 }}</div>
  </div>
</template>

<style scoped></style>
