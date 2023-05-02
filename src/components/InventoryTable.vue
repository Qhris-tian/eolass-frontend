<template>
    <div>
        <div class="relative flex flex-wrap">
            <div class="w-full md:w-3/5 sm:rounded-lg overflow-x-auto px-2">
                <div class="flex justify-between items-center mb-2">
                    <h2 class="text-sm md:text-lg">Available Inventory</h2>
                    <div>
                        <input type="text" placeholder="Search">
                    </div>
                </div>
                <table class="w-full text-xs sm:text-sm text-left text-gray-500 " aria-label="Inventory Table">
                    <thead class="text-xs text-gray uppercase bg-white">
                        <tr>
                            <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">Product</th>
                            <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-center">Region</th>
                            <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-center">Created Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <template v-if="inventoryStore.inventory.length > 0">
                            <tr v-for="(product, index) in inventoryStore.inventory" :key="index"
                                class="bg-white border border-line cursor-pointer hover:bg-gray-100"
                                @click="selectProduct(product)">
                                <td class="capitalize px-1 sm:px-6 py-1 sm:py-4 text-left">{{ product.title }}</td>
                                <td class="capitalize px-1 sm:px-6 py-1 sm:py-4 text-center">
                                    {{ utils.placeholder(product.region) }}
                                </td>
                                <td class="capitalize px-1 sm:px-6 py-1 sm:py-4 text-center">
                                    {{ utils.formatDate(product.created_at, 'do MMM Y') }}
                                </td>
                            </tr>
                        </template>
                        <template v-else>
                            <tr>
                                <td colspan="3" class="text-center">Loading Inventory...</td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
            <div class="w-full md:w-2/5 sm:rounded-lg overflow-x-auto px-2 mt-3">
                <div class="flex justify-between items-center">
                    <h2 class="text-sm md:text-lg">
                        {{ selectedProduct?.title ? selectedProduct?.title : 'Product' }} Keys
                    </h2>

                    <div>
                        <button
                            class="bg-purple px-3 py-2 rounded text-white text-[12px] flex justify-center items-center">
                            <svg-component :name="'plus'" class="w-4" />
                            <span>Add Key</span>
                        </button>
                    </div>
                </div>
                <div class="overflow-x-auto mt-2">
                    <table class="w-full text-sm text-left text-gray-500" aria-label="Inventory Cards Table">
                        <thead class="text-xs text-gray uppercase bg-white">
                            <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">Number</th>
                            <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">Pin</th>
                            <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">Expiry</th>
                            <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">URL</th>
                        </thead>
                        <tbody>
                            <template v-if="productCards?.length > 0">
                                <tr v-for="(card, index) in productCards" :key="index" class="bg-white border border-line">
                                    <td class="capitalize px-1 sm:px-6 py-1 sm:py-4 text-left">{{ card.card_number }}</td>
                                    <td class="capitalize px-1 sm:px-6 py-1 sm:py-4 text-left">{{ card.pin_code }}</td>
                                    <td class="capitalize px-1 sm:px-6 py-1 sm:py-4 text-left">
                                        {{ utils.placeholder(card.expire_date) }}</td>
                                    <td class="capitalize px-1 sm:px-6 py-1 sm:py-4 text-left">{{ card.claim_url }}</td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="4" class="text-center text-base text-gray-700 px-3">Select product to
                                        display
                                        keys.
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import axios from '@/configs/request'
import { useUtils } from '@/composables/utils'
import type { Card, Product } from '@/interfaces/inventory'
import { useInventoryStore } from '@/stores/inventory'
import SvgComponent from '@/components/ui/SvgComponent.vue';

const utils = useUtils()

const inventoryStore = useInventoryStore()

const productCards = ref<Array<Card>>([])
const selectedProduct = ref<Product>()


function selectProduct(product: Product) {
    if (product.sku !== selectedProduct.value?.sku) {
        selectedProduct.value = product

        axios
            .get(`/api/v1/inventory/${product.sku}/cards`)
            .then(({ data }) => productCards.value = data)
    }
}

</script>

<style scoped></style>