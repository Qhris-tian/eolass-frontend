<template>
  <div class="ml-[2rem] sm:ml-[12rem] mt-5">
    <div>
      <div>
        <create-auction-progress :step="step" />
      </div>
      <div>
        <get-auction-keys-component v-show="step === 1" @update-auction-keys="updateAuctionKeys"
          @update-product-name="updateProductName" />
        <get-auction-product-component v-show="step === 2" :product="productName"
          @update-selected-product="updateSelectedProduct" />
        <complete-auction-component v-show="step === 3" ref="CompleteAuctionComponentRef" 
          :title="productName" :product="selectedProduct" :auctionKeys="auctionKeys" />
      </div>
      <div class="flex justify-between">
        <button-component v-if="step > 1" type="button" :label="'Previous'" @click="step = step - 1" />
        <button-component v-if="step < 3" type="button" :label="'Next'" @click="step = step + 1" />
        <button-component v-if="step === 3" type="button" :label="'Submit Auction'" @click="createAuction" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CompleteAuctionComponent from '../../../components/auction/CompleteAuctionComponent.vue'
import GetAuctionKeysComponent from '../../../components/auction/GetAuctionKeysComponent.vue'
import GetAuctionProductComponent from '../../../components/auction/GetAuctionProductComponent.vue'
import CreateAuctionProgress from '../../../components/auction/CreateAuctionProgress.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'

const step = ref<number>(1)

const auctionKeys = ref<Array<string>>()
function updateAuctionKeys(keys: Array<string>) {
  auctionKeys.value = keys
}

const productName = ref<any>(null)
function updateProductName(product: string) {
  productName.value = product
}

const CompleteAuctionComponentRef: any = ref(null)
function createAuction() {
  CompleteAuctionComponentRef.value.createAuction()
}

const selectedProduct = ref<any>(null)
function updateSelectedProduct(product: Object) {
  selectedProduct.value = product
}

</script>

<style scoped></style>