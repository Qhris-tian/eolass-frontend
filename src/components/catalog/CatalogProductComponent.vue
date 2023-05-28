<template>
    <div class="relative w-[47%] md:w-[22%] 2xl:w-[15%] bg-white border border-line rounded-lg shadow-sm ml-2 md:ml-6
        mt-5 md:mt-10">
        <div class="relative">
            <object class="rounded-t-lg w-[100%] h-[80px] md:h-[200px]" :data="product.image" type="image/jpg">
                <img src="@/assets/default.svg" alt="Stack Overflow logo and icons and such" />
            </object>
            <button type="button" class="absolute top-0 right-2 rounded bg-purple hover:bg-purple-light"
                @click="addToInventory(product)">
                <svg-component v-show="product.sku !== addedProduct" :name="'plus'"
                    class="block w-[35px] p-1 text-white " />
                <svg-component v-show="product.sku === addedProduct" :name="'check-square'"
                    class="block w-[35px] p-2 text-white " />

            </button>
        </div>
        <div class="p-2 md:p-5">
            <h4 class="mb-2 text-ellipsis overflow-hidden whitespace-nowrap heading-md capitalize">
                {{ product.title }}
            </h4>
            <p class="mb-2 heading-sm uppercase">{{ product.regions[0].name }}</p>
            <p class="body-text">
                {{ product.currency.symbol }}{{ product.min_price }} -
                {{ product.currency.symbol }}{{ product.max_price }}
            </p>
            <button-component :label="'Order'" class="!py-[0.3rem] sm:!py-[0.6rem] mt-3 md:mt-5 w-full"
                @click="emit('select-product', product)" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue';
import type { Result } from '@/interfaces/catalog';
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import SvgComponent from '../ui/SvgComponent.vue';
import { useInventoryStore } from '@/stores/inventory'

const emit = defineEmits(['select-product'])

defineProps<{
    product: Result
}>()


const inventoryStore = useInventoryStore()
const addedProduct = ref<number | null>(null)

function addToInventory(product: Result) {
    inventoryStore.createInventory(product).then(({ data }) => {
        console.log(data);
        addedProduct.value = product.sku
    })
}


</script>

<style scoped></style>