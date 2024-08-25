<script setup lang="ts">
import Son from './s.vue'

interface Props {
  name?: string[]
}

// 假设f也被调用
withDefaults(defineProps<Props>(), {
  name: () => ['aaa', 'bbb', 'ccc'],
})
</script>

<template>
  <div>
    <Son :name-list="name" />
  </div>
</template>

<style scoped></style>
