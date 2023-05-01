<template>
    <div class="">
        <div class="w-full flex justify-center">
            <div class="md:w-[40%]">
                <SearchBarComponent @trigger-search="searchProduct" param="" />
            </div>
        </div>
        <div v-if="productDetails != null">
            <div>
                <h4>{{ productDetails.name }}</h4>
                <p class="md:w-[40%] flex flex-wrap justify-between font-medium text-[11px] pt-4">
                    <span v-for="language in productDetails.languages">{{ language }}</span>
                </p>
            </div>
            <div class="pt-10">
                <CompetitionTable :product-auctions="productDetails.auctions" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, reactive, ref, watch } from 'vue';
import axios from 'axios';
import SearchBarComponent from '@/components/ui/SearchBarComponent.vue';
import CompetitionTable from '@/components/CompetitionTable.vue';

const productDetails: any = ref({})

const props = defineProps({
    product: Object
})

// watch(productDetails, () => {
//     console.log(`variable change:`);
// })

const searchProduct = (param: string) => {
    
    console.log(`searching for ${param}`);

    try {
        axios.get(`${import.meta.env.VITE_APP_EOLASS_BACKEND_BASE_URL}/products/search?product=${param}&per_page=5`)
        .then((data) => {
            productDetails.value = data.data.products[0]
        })
        
    } catch (error) {
        console.error(error)
    }
}

</script>

<style scoped>
</style>