<template>
    <div class="flex justify-between">
        <div class="">
            <SvgComponent :name=iconName class="eneba-svg" />
        </div>
        <div class="">
            <SearchBarComponent />
        </div>
        <div class="">
            
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