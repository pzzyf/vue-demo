<script setup>
const props = defineProps({
  data: {
    type: Object,
    default: () => {},
  },
})

console.log('props :>> ', props)

console.log('props.data :>> ', props.data)
</script>

<template>
  <div>
    {{ props.data }}
  </div>
</template>

<style lang="scss" scoped>

</style>
