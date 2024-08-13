<script setup lang="ts">
defineOptions({
  name: 'Son',
})

const props = defineProps<{
  a: string
  b: string
}>()

const emit = defineEmits(['emit'])

function handleEmit(event: string) {
  emit('emit', event)
}
</script>

<template>
  <div @click="handleEmit('click')">
    {{ props.a }}
    {{ props.b }}
  </div>
</template>

<style scoped></style>
