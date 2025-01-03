<script setup>
const a = reactive({
  name: 'afe1',
})
console.log('a :>> ', a)

const b = toRaw(a)
console.log('b :>> ', b)
</script>

<template>
  <div>
    1
  </div>
</template>

<style lang="scss" scoped>

</style>
