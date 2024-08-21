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
      <div m-5>
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
