<script setup>
const progressData = [
  { name: '辅助', value: 20, total: 200, color: '#50d890' },
  { name: '辅阳弹', value: 100, total: 100, color: '#ffd93d' },
  { name: '特性能值', value: 15, total: 150, color: '#4c83ff' },
  { name: '特殊属性', value: 15, total: 150, color: '#6c757d' },
]
</script>

<template>
  <div class="progress-container">
    <div v-for="item in progressData" :key="item.name" class="progress-item">
      <div class="progress-label">
        {{ item.name }}
      </div>
      <div class="progress-bar-wrapper">
        <div class="progress-bar" :style="{
          width: `${(item.value / item.total) * 100}%`,
          background: `linear-gradient(90deg, transparent 0%, ${item.color} 100%)`,
        }">
          <span class="progress-text">{{ item.value }}/{{ item.total }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.progress-container {
  padding: 20px;
  background-color: #1a1b1e;
  color: #fff;
}

.progress-item {
  margin-bottom: 20px;
}

.progress-label {
  margin-bottom: 8px;
  font-size: 14px;
}

.progress-bar-wrapper {
  height: 24px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.progress-bar {
  height: 100%;
  transition: all 0.3s ease;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-size: 200% auto;
  opacity: 0.8;
  /* 添加一定的透明度 */
}

.progress-bar:hover {
  background-size: 100% auto;
  filter: brightness(1.1);
}

.progress-text {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #fff;
  font-size: 12px;
}
</style>
