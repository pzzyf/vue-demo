<script setup lang="ts">

</script>

<template>
  <div class="grid grid-cols-1 w-full gap-4 lg:grid-cols-4 md:grid-cols-2">
    <div v-for="item in 4" :key="item" class="border p-4">
      {{ item }}
    </div>
  </div>
</template>

<style scoped>

</style>
