<template>
    <div class="">
        <div class="w-full flex justify-center items-center">
            <div class="md:w-[50%]">
                <SearchBarComponent :param="props.product" @trigger-search="searchProduct"
                    @disable-dropdown="disableDropDown" />
            </div>
        </div>
        <div class="flex justify-center">
          <alert-component
            v-show="rateLimitError"
            :type="'danger'"
            :message="
              rateLimitError ? rateLimitError : ''
            "
            class="w-[600px]"
            @close-alert="rateLimitError = null"
          />
        </div>
        <transition>
            <div class="flex justify-center">
                <div class="mb-[30px] flex justify-center absolute z-10 border border-[#ccc] w-[50%]" v-if="showDropDown">
                    <ul class="w-full bg-white max-h-[30vh] overflow-scroll">
                        <li v-if="allSearchedProducts.length == 0" class="p-3">
                            No data found for your search
                        </li>
                        <li v-for="(product, index) in allSearchedProducts" :key="index" @click="selectProduct(index)"
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
                    <span v-for="(language, index) in productDetails.languages" :key="index" class="pr-4">
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
import { defineProps, defineEmits, ref } from 'vue';
import axios from '@/configs/request';
import SearchBarComponent from '@/components/ui/SearchBarComponent.vue';
import CompetitionTable from '@/components/CompetitionTable.vue';
import AlertComponent from '../ui/AlertComponent.vue';

const productDetails: any = ref({})
const allSearchedProducts: any = ref([])
const showDropDown = ref<boolean>(false)
const rateLimitError = ref<string | null>(null)

const props = defineProps<{
    product: string | null
}>()

const emit = defineEmits(['update-selected-product'])

const searchProduct = (param: string) => {
    axios.get(`/api/v1/products/search?product=${param}&per_page=10`)
        .then((data) => {
            showDropDown.value = true;
            allSearchedProducts.value = data.data.products
        }).catch(({response}) => {
            if (response.status == 429) {
                rateLimitError.value = "You've reached your limit of 2000 requests in 10 minutes. Try again later.";
                console.log(rateLimitError.value)
            }
        })
}

const selectProduct = (index: number) => {
    showDropDown.value = false;
    productDetails.value = allSearchedProducts.value[index]
    emit('update-selected-product', productDetails.value)
}

function disableDropDown() {
    showDropDown.value = false;
}

</script>

<style scoped></style>