// 监听单个数据
// 监听多个数据
// 监听指定数据
// immediate: true 立即执行

<script setup lang="ts">
const count = ref(0)
const message = ref('hello')

watch([count, message], ([newCount, newMessage], [oldCount, oldMessage]) => {
  console.log('新值', newCount, newMessage)
  console.log('旧值', oldCount, oldMessage)
}, {
  deep: true,
  immediate: true,
})

count.value++
message.value = 'world'
</script>

<template>
  <div>
    <p>count: {{ count }}</p>
    <p>message: {{ message }}</p>
  </div>
</template>

<style scoped></style>
