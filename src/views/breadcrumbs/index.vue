<script setup lang="ts">
const route = useRoute()

const breadcrumbs = computed(() => {
  const matched = route.matched

  const resultBreadcrumb = []

  for (const mathch of matched) {
    const { meta, path } = mathch
    const { title } = meta
    resultBreadcrumb.push({
      path: path || route.path,
      title,
    })
  }

  return resultBreadcrumb
})
</script>

<template>
  <div flex justify-center>
    <div v-for="item, index in breadcrumbs" :key="index">
      <div flex items-center>
        <div m-1>
          {{ item.title }}
        </div>
        <div v-if="index < breadcrumbs.length - 1">
          /
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
