<template>
  <div class="ml-[2rem] mt-10 mr-10 py-10 px-10">
    <h2 class="heading-lg mb-4 dark:text-white">Select Product</h2>
    <CreateAuctionStepTwo
      :product="props?.product"
      @update-selected-product="updateSelectedProduct"
    />
  </div>
</template>

<script setup lang="ts">
import CreateAuctionStepTwo from './CreateAuctionStepTwo.vue'
import { defineProps, defineEmits, ref } from 'vue'

const emit = defineEmits(['update-selected-product'])

const props = defineProps<{
  product: string | null
}>()

const selectedProduct = ref<any>(null)
function updateSelectedProduct(product: Object) {
  selectedProduct.value = product
  emit('update-selected-product', selectedProduct.value)
}
</script>

<style scoped></style>
