<script setup>
const control = ref({
  active1: false,
  active2: false,
  active3: false,
})

function handleIn(item) {
  if (item === 1) {
    control.value.active1 = true
    control.value.active2 = false
    control.value.active3 = false
  }
  else if (item === 2) {
    control.value.active1 = false
    control.value.active2 = true
    control.value.active3 = false
  }
  else {
    control.value.active1 = false
    control.value.active2 = false
    control.value.active3 = true
  }
}

function handleout() {
  control.value.active1 = false
  control.value.active2 = false
  control.value.active3 = false
}
</script>

<template>
  <div class="relative size-full flex">
    <div v-for="item in 3" :key="item" @mousemove="handleIn(item)" @mouseout="handleout">
      <div class="h-[100px] w-[100px] border border-solid">
        {{ item }}
      </div>
    </div>
    <div v-show="control.active1">
      1
    </div>
    <div v-show="control.active2">
      2
    </div>
    <div v-show="control.active3">
      3
    </div>
  </div>
</template>

<style scoped></style>
