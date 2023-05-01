<template>
    <div class="">
        <div class="w-full flex justify-center">
            <div class="md:w-[40%]">
                <SearchBarComponent @trigger-search="searchProduct" />
            </div>
        </div>
        <div v-if="product">
            <div>
                <h4>Half Life 3 - Game</h4>
                <p class="md:w-[40%] flex flex-wrap justify-between font-medium text-[11px] pt-4">
                    <span>EUROPE</span>
                    <span>BULGARIAN</span>
                    <span>LITHUANIAN</span>
                    <span>FRENCH</span>
                </p>
            </div>
            <div class="pt-10">
                <CompetitionTable />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import SearchBarComponent from '@/components/ui/SearchBarComponent.vue';
import CompetitionTable from '@/components/CompetitionTable.vue';


const props = defineProps({
    product: Object
})

const searchProduct = () => {
    // props.product = {}
    alert('searching...');
}

</script>

<style scoped>
</style>