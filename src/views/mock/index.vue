<script setup lang="ts">
import { getTest } from '@/api/test'

async function getTest1() {
  console.log('fn start')
  const res = await getTest()
  console.log('res :>> ', res)
  const res1 = getTest()
  res1.then((res) => {
    console.log('res :>> ', res)
  })
  console.log('res1 :>> ', res1)
  console.log('fn end')

  const PromiseBar = [1, 2, 3, 4, 5].map(() => {
    return getTest()
  })

  console.log('PromiseBar :>> ', PromiseBar)
  Promise.all(PromiseBar).then((res) => {
    console.log('res :>> ', res)
  })
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
