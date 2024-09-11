<script setup lang="ts">
import { getTest } from '@/api/test'

async function getTest1() {
  console.log('fn start')
  const res = await getTest()
  console.log('res :>> ', res)
  console.log('fn end')
}
</script>

<template>
  <div>
    <button @click="getTest1">
      getTest
    </button>
  </div>
</template>

<style scoped></style>
