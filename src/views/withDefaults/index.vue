<script setup lang="ts">
// const props1 = defineProps<{
//   name: string
// }>()

const props = withDefaults(defineProps<{ name: string }>(), {
  name: 'afe1',
})
</script>

<template>
  <div v-if="props">
    {{ name }}
  </div>
</template>

<style scoped>

</style>
