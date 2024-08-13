<script setup lang="ts">
import Son from './s.vue'

function handleEmit(event: string) {
  console.log(event)
}
</script>

<template>
  <div>
    <Son a="1" b="2" @emit="handleEmit" />
  </div>
</template>

<style scoped></style>
