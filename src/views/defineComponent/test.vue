<script setup lang="ts">
const props = defineProps<{
  name?: string
}>()

const attrs = useAttrs()
</script>

<template>
  <div>
    {{ props.name }}
    {{ attrs }}
  </div>
</template>

<style scoped>

</style>
