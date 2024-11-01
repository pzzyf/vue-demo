<script setup lang="ts">
const slot = useSlots()
console.log('slot :>> ', slot)
</script>

<template>
  <div>
    <slot name="hhh" />
  </div>
</template>

<style scoped>

</style>
