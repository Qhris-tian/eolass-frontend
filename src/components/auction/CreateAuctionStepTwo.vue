<template>
    <div class="">
        <div class="w-full flex justify-center">
            <div class="md:w-[40%]">
                <SearchBarComponent @trigger-search="searchProduct" param="" />
            </div>
        </div>
        <transition>
            <div class="flex justify-center">
                <div class="mb-[30px] flex justify-center absolute z-10 border border-[#ccc] w-[50%]" v-if="showDropDown">
                    <ul class="w-full bg-white max-h-[30vh] overflow-scroll">
                        <li v-if="allSearchedProducts.length == 0"
                            class="p-3">
                            No data found for your search
                        </li>
                        <li v-for="(product, index) in allSearchedProducts" :key="index"
                            @click="selectProduct(index)"
                            class="border-b p-3 cursor-pointer">
                            {{ product.name }}
                        </li>
                    </ul>
                </div>
            </div>
        </transition>
        <div v-if="productDetails != null" class="mt-10">
            <div>
                <h4>{{ productDetails.name }}</h4>
                <p class="md:w-[40%] flex flex-wrap font-medium text-[11px] pt-4">
                    <span v-for="language in productDetails.languages" class="pr-4">
                        {{ language }}
                    </span>
                </p>
            </div>
            <div class="pt-10">
                <CompetitionTable :product-auctions="productDetails.auctions" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue';
import axios from 'axios';
import SearchBarComponent from '@/components/ui/SearchBarComponent.vue';
import CompetitionTable from '@/components/CompetitionTable.vue';

const productDetails: any = ref({})
const allSearchedProducts: any = ref([])
let showDropDown = ref<boolean>(false)

const props = defineProps({
    product: Object
})

const searchProduct = async (param: string) => {
    
    console.log(`searching for ${param}`);

    try {
        await axios.get(`${import.meta.env.VITE_APP_EOLASS_BACKEND_BASE_URL}/products/search?product=${param}&per_page=10`)
        .then((data) => {
            showDropDown.value = true;
            allSearchedProducts.value = data.data.products
            console.log(allSearchedProducts.value)
        })
        
    } catch (error) {
        console.error(error)
    }
}

const selectProduct = (index: number) => {
    showDropDown.value = false;
    productDetails.value = allSearchedProducts.value[index]
}

</script>

<style scoped>
</style>