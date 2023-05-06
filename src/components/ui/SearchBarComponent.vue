<template>
  <div class="mb-1 px-2 w-full">
    <div class="relative">
      <div class="absolute left-0 inset-y-0 pl-3 flex items-center">
        <svg class="fill-current h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
        </svg>
      </div>

      <input
        class="w-full bg-purple-light text-white text-center border pl-12 pr-4 py-2 rounded focus:border-purple-light focus:shadow-outline outline-none placeholder-white"
        type="text" placeholder="Search product" v-model="searchParam" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';


const emit = defineEmits(['triggerSearch', 'disable-dropdown'])
const props = defineProps<{
  param?: string | null
}>()


const searchParam = ref<string | null>()
watch(() => props.param, (value) => searchParam.value = value)

watch(searchParam, (value: any) => {
  if (value?.length > 2) {
    emit('triggerSearch', value)
  }
  if (value?.length === 0) {
    emit('disable-dropdown')
  }
})
</script>

<style lang="scss" scoped></style>