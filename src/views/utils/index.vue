<script setup lang="ts">
import { arr_unique } from '@afe1/utils'

const is = arr_unique([1, 2, 3, 3, 4])
</script>

<template>
  <div>
    <h1>Utils</h1>
    <p>{{ is }}</p>
  </div>
</template>

å
<style scoped></style>
