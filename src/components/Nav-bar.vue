<template>
    <div class="flex justify-between pt-5">
        <div class="w-1/4">
            <SvgComponent :name=iconName class="eneba-svg" />
        </div>
        <div class="w-2/4">
            <SearchBarComponent />
        </div>
        <div class="w-1/4">
            
        </div>
    </div>
</template>

<script setup lang="ts">
import SearchBarComponent from './ui/SearchBarComponent.vue';
import SvgComponent from './ui/SvgComponent.vue'

const props = defineProps<{
    iconName: string
}>()

</script>

<style scoped>
</style>