<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// 数据定义
const dataList = ref([
  { name: '点位1', content: '内容1' },
  { name: '点位2', content: '内容2' },
  { name: '点位3', content: '内容3' },
  { name: '点位4', content: '内容4' },
])
const currentIndex = ref(0)
const intervalTime = 3000
let timer = null

// 计算属性
const currentData = computed(() => dataList.value[currentIndex.value])

// 方法定义
function startInterval() {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % dataList.value.length
  }, intervalTime)
}

function stopInterval() {
  if (timer) {
    clearInterval(timer)
    timer = null
  }
}

function handleMouseEnter(index) {
  stopInterval()
  currentIndex.value = index
}

function handleMouseLeave() {
  startInterval()
}

// 生命周期钩子
onMounted(() => {
  startInterval()
})

onBeforeUnmount(() => {
  stopInterval()
})
</script>

<template>
  <div class="carousel-container">
    <div class="markers-container">
      <div
        v-for="(item, index) in dataList"
        :key="index"
        class="marker"
        :class="{ active: currentIndex === index }"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="data-display">
      {{ currentData.content }}
    </div>
  </div>
</template>

<style scoped>
.carousel-container {
  padding: 20px;
}

.markers-container {
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
}

.marker {
  padding: 10px 20px;
  border: 1px solid #ddd;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s;
}

.marker:hover,
.marker.active {
  background-color: #409eff;
  color: white;
}

.data-display {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
