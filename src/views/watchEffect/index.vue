// watchEffect 立即执行传入的一个函数，同时响应式追踪其依赖，并在其依赖变更时重新执行该函数。

<script setup lang="ts">
const count = ref(0)

watchEffect(() => {
  console.log('count', count.value)
})
</script>

<template>
  <div>
    watchEffect
  </div>
</template>

<style scoped></style>
