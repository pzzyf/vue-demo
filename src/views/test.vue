<script setup lang="ts">
const hello = inject('hello')
</script>

<template>
  <div>
    <div v-color>
      test
    </div>

    <div v-color="'red'">
      test
    </div>

    <div>{{ hello }}</div>
  </div>
</template>

<style scoped>

</style>
