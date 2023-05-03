<template>
  <button class="btn body-text" :class="btnClass" :disabled="isLoading">
    <template v-if="isLoading">
      <span class="flex items-center">
        <svg-component :name="'spinner'" />
        {{ loadingLabel }}
      </span>
    </template>
    <template v-else>
      {{ label }}
    </template>
  </button>
</template>

<script setup lang="ts">
import SvgComponent from '@/components/ui/SvgComponent.vue'

defineProps({
  label: {
    type: String,
    required: true
  },
  loadingLabel: {
    type: String,
    required: false,
    default: 'Loading...'
  },
  isLoading: {
    type: Boolean,
    required: false,
    default: false
  },
  btnClass: {
    type: String,
    required: false,
    default: 'btn-primary'
  }
})
</script>

<style scoped>
.btn {
  @apply py-2 px-4 rounded text-center block items-center;
}

.btn-primary {
  @apply bg-purple border-purple text-white;
}

.btn-primary:hover {
  @apply bg-purple-light border-purple-light text-white;
}

.btn-secondary {
  @apply bg-purple/10 border-purple/10 text-purple;
}

.btn-secondary:hover {
  @apply bg-purple/25 border-purple/25 text-purple;
}

.btn-danger {
  @apply bg-red-600 border-red-700 text-white;
}

.btn-danger:hover {
  @apply bg-red-400 border-red-500 text-white;
}
</style>

