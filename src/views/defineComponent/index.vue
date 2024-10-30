<script setup lang="ts">
import { useButton, useTest } from './index'

const Button = useButton()
const Demo = useTest()
</script>

<template>
  <div>
    <Button color="red" font-size="30px">
      123
    </Button>
    <Demo />
  </div>
</template>

<style scoped></style>
