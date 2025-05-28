<script setup>
const isExtended = ref(false)

const fanz = () => isExtended.value = !isExtended.value
</script>

<template>
  <div class="1">
    <div @click="fanz">
      {{ isExtended ? '收起' : '展开' }}
    </div>

    <div class="size-full">
      <div class="bg" :class="{ Extend: isExtended }">
        123
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg {
  width: 1920px;
  height: 500px;
  background: url('@/assets/1.png');
  transition: all 0.3s ease-in-out;
}

.Extend {
  height: 666px;
}
</style>
