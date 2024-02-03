<script lang="ts" setup>
const emit = defineEmits<{
  (e: 'emitClick'): void
}>()

function handleClick() {
  emit('emitClick');
}
</script>

<template>
  <button class=" p-2.5 rounded-md bg-[#fb8ba2] text-white uppercase font-semibold"
          @click="handleClick">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
