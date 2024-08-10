<script>
import SlotB from './b.vue'

export default {
  name: 'Vbase',
  components: {
    SlotB,
  },
}
</script>

<template>
  <div>
    321
    <SlotB>
      <template #header>
        <h1>???</h1>
      </template>
    </SlotB>
  </div>
</template>
