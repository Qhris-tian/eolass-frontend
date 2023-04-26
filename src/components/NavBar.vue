<template>
  <div class="flex justify-between pt-5">
    <div class="w-1/4">
      <SvgComponent :name="props.iconName" class="eneba-svg" />
    </div>
    <div class="w-2/4">
      <SearchBarComponent v-if="props.showSearchBar" />
    </div>
    <div class="w-1/4"></div>
  </div>
</template>

<script setup lang="ts">
import SearchBarComponent from './ui/SearchBarComponent.vue'
import SvgComponent from './ui/SvgComponent.vue'

const props = defineProps<{
  iconName: string
  showSearchBar: boolean
}>()

</script>

<style scoped>
</style>