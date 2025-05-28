<script setup>
const extend = ref(false)

const change = () => extend.value = !extend.value
</script>

<template>
  <div class="bg" :class="{ clk: extend }">
    <div @click="change">
      {{ extend ? '收起' : '展开' }}
    </div>
    <div>2</div>
  </div>
</template>

<style scoped>
.bg {
  position: fixed;
  bottom: 100px;
  transition: all 0.3s ease-in-out;
  background-image: url('@/assets/1.png');
  width: 1920px;
  height: 50px;
}

.clk {
  bottom: 300px;
  height: 150px;
}
</style>
