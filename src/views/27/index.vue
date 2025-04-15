<script setup>
import Son from './son.vue'

const a = ref(null)
const isLoading = ref(true)

async function getData() {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return a.value = { name: 'afe1' }
  }
  finally {
    isLoading.value = false
  }
}

getData()
</script>

<template>
  <div>
    <Son v-if="!isLoading" :data="a" />
    <div v-else />
  </div>
</template>

<style lang="scss" scoped>

</style>
