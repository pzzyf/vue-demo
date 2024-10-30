<script setup>
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

watch(count, (newVal) => {
  console.log('watch:', newVal)
}, { immediate: true })

// 在 setup 时就会执行
watchEffect(() => {
  console.log('watchEffect:', count.value)
})

// 在 setup 时就会执行

// 只有在 count 改变时才会执行
watch(count, (newVal) => {
  console.log('watch without immediate:', newVal)
})

onMounted(() => {
  console.log('onMounted')
})

onBeforeMount(() => {
  console.log('onBeforeMount')
})
</script>
