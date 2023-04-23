<template>
  <transition>
    <div class="p-3 mb-3 rounded-lg border" :class="utils.status(props.type)" role="alert">
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
import { useUtils } from '@/composables/utils'

const emit = defineEmits(['close-alert'])
const utils = useUtils()

const props = defineProps<{
  message: string
  type: string
  details?: string
}>()

</script>

<style scoped>
</style>