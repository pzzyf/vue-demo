<script setup lang="ts">
import { arr_unique } from '@afe1/utils'

const is = arr_unique({ key: 1 })
</script>

<template>
  <div>
    <h1>Utils</h1>
    <p>{{ is }}</p>
  </div>
</template>

<style scoped></style>
