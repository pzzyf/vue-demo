<script>
export default {
  name: 'SlotB',
}
</script>

<template>
  <div>
    123
    <slot name="header">
      <h1>具名插槽里面的内容</h1>
    </slot>
  </div>
</template>
