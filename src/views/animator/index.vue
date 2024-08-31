<script setup lang="ts">
import { TransitionPresets, useTransition } from '@vueuse/core'

interface Props {
  startVal?: number
  endVal?: number
  autoplay?: boolean
  duration?: number
  useEasing?: boolean
  transition?: keyof typeof TransitionPresets
}

const props = withDefaults(defineProps<Props>(), {
  startVal: 0,
  endVal: 2001,
  autoplay: true,
  duration: 1500,
  useEasing: true,
  transition: 'linear',
})

const source = ref(props.startVal)
const disabled = ref(false)
let outputValue = useTransition(source)
const value = computed(() => unref(outputValue))

watchEffect(() => {
  source.value = props.startVal
})

watch([() => props.startVal, () => props.endVal], () => {
  if (props.autoplay) {
    start()
  }
})

onMounted(() => {
  // eslint-disable-next-line ts/no-unused-expressions
  props.autoplay && start()
})

function start() {
  run()
  source.value = props.endVal
}

function run() {
  outputValue = useTransition(source, {
    disabled,
    duration: props.duration,
    ...(props.useEasing
      ? { transition: TransitionPresets[props.transition] }
      : {}),
  })
}
</script>

<template>
  <div>
    {{ value }}
  </div>
</template>

<style scoped>

</style>
