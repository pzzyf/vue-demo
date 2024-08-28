<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useUserInfo } from '@/store'

const userInfo = useUserInfo()

const { name } = storeToRefs(userInfo)

console.log('name :>> ', name)
console.log('name.value :>> ', name.value)
</script>

<template>
  <div flex justify-center>
    <div v-if="name === 'afe1'">
      显示
    </div>
  </div>
</template>

<style scoped>

</style>
