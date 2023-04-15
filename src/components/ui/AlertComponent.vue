<template>
  <transition>
    <div class="p-3 mb-3 rounded-lg border" :class="typeClass[props.type]" role="alert">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <svg-component :name="'info-circle'" class="w-5 h-5 mr-2" />
          <h3 class="text-md font-medium">{{ message }}</h3>
        </div>
        <button type="button" @click="emit('close-alert')">
          <svg-component :name="'close'" />
        </button>
      </div>
      <div v-if="details" class="mt-2 mb-4 text-sm">
        {{ details }}
      </div>
      <slot></slot>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'

import SvgComponent from './SvgComponent.vue'

const emit = defineEmits(['close-alert'])

const props = defineProps<{
  message: string
  type: string
  details?: string
}>()

const typeClass: object = {
  success: 'text-green-800 border-green-300 bg-green-50',
  danger: 'text-red-800 border-red-300 bg-red-50',
  info: 'text-blue-800 border-blue-300 bg-blue-50',
  warning: 'text-yellow-800 border-yellow-300 bg-yellow-50'
}
</script>

<style scoped>
</style>