<script setup lang="ts">
defineOptions({
  name: 'Son',
})

const props = defineProps<{
  nameList?: string[]
}>()
</script>

<template>
  <div>
    {{ props.nameList }}
  </div>
</template>

<style scoped></style>
