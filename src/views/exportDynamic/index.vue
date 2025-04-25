<script setup>
import { a, b, c } from '.'

console.log('a :>> ', a.value)
console.log('b :>> ', b.name)
console.log('c :>> ', c.value)
</script>

<template>
  <div>{{ a }}</div>
  <div>{{ b.name }}</div>
  <div>{{ c }}</div>
</template>

<style lang="scss" scoped>

</style>
