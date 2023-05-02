<template>
  <div id="modal-backdrop" class="modal-backdrop" @click="handleBackdropClick">
    <div
      class="absolute z-50 bg-white rounded-md p-3 sm:p-8 dark:bg-black-dark w-[350px] sm:w-[500px] top-10"
      :class="props.contentClass"
    >
      <slot name="header"></slot>

      <slot name="body"></slot>

      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const emit = defineEmits(['close-modal'])
const props = defineProps<{
  contentClass?: string
  position?: string
}>()

const handleBackdropClick = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (target?.id === 'modal-backdrop') {
    emit('close-modal', false)
  }
}
</script>

<style scoped>
.modal-backdrop {
  z-index: 99;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  mix-blend-mode: normal;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>