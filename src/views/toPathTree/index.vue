<script setup lang="ts">
import { pathToTree } from 'to-path-tree'

const data = [
  'src/index.ts',
  'src/a/index.ts',
  'src/a/b/index.ts',
  'src/a/b/d/index.ts',
  'src/foo.ts',
  'src/b/index.js',
  'src/b/c/index.ts',
  'a/index.ts',
  'a/b.ts',
  'a/b/index.js',
]

const tree = pathToTree(data)

console.log('tree :>> ', tree)
</script>

<template>
  <div>
    123
  </div>
</template>

<style scoped>

</style>
