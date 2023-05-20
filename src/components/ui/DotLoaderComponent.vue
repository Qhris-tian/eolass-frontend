<template>
  <div>
    <div>
      <div class="flex justify-center items-center relative py-3 px-0 overflow-hidden">
        <div class="!text-primary" :class="'dot-' + props.type"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { DotType } from '@/enums/dottype'

const props = defineProps({
  type: {
    type: String as PropType<DotType>
  }
})
</script>

<style scoped>
@import '@/assets/css/dot.css';
</style>
