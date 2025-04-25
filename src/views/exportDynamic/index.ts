import { computed, reactive, ref } from 'vue'

const a = ref(0)
const b = reactive({
  name: 'afe1',
})
const c = computed(() => {
  return 2
})

export { a, b, c }
