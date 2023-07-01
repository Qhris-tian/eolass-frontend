<template>
  <div class="ml-[2rem] sm:ml-[10rem]">
    <div class="px-5">
      <div class="flex justify-center items-center flex-col w-full">
        <create-auction-progress :step="step" class="mb-4" />
        <alert-component
          class="sm:min-w-[500px]"
          v-if="showAlert"
          :type="alertType"
          :message="alertMessage"
          @close-alert="showAlert = false"
        />
      </div>
      <div>
        <get-auction-keys-component
          v-show="step === 1"
          @update-auction-keys="updateAuctionKeys"
          @update-product-name="updateProductName"
        />
        <get-auction-product-component
          v-show="step === 2"
          :product="productName"
          @update-selected-product="updateSelectedProduct"
        />
        <complete-auction-component
          v-show="step === 3"
          :title="productName"
          :product="selectedProduct"
          :form="form"
          @update-form="updateForm"
        />
        <create-auction-summary v-show="step === 4" :form="form" :product="selectedProduct" />
      </div>
      <div
        v-if="!submitted"
        class="flex justify-between mx-8 sm:mx-16"
        :class="{ 'flex-row-reverse': step < 4 }"
      >
        <button-component
          v-if="step < 4"
          class="!px-8 sm:!mr-10"
          type="button"
          :label="'Next'"
          @click="goNext()"
        />
        <button-component
          v-if="step > 1"
          class="!px-8"
          type="button"
          :label="'Previous'"
          @click="step = step - 1"
        />
        <button-component
          v-if="step === 4"
          class="!px-8"
          type="button"
          :label="'Submit'"
          :is-loading="busy"
          @click="submit"
        />
      </div>
      <div v-else class="flex justify-center mx-8 sm:mx-16">
        <button-component
          class="!px-8"
          type="button"
          :label="'Create new auction'"
          :is-loading="busy"
          @click="restart"
        />
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
import CreateAuctionSummary from '../../../components/auction/CreateAuctionSummary.vue'
import AlertComponent from '@/components/ui/AlertComponent.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import { useAuctionStore } from '@/stores/auctions'
import { useInventoryStore } from '@/stores/inventory'
import type { CreateAuctionForm, Product } from '@/interfaces/auction'
// import type { Product } from '@/interfaces/auction'

const step = ref<number>(1)

const busy = ref<boolean>(false)
const form = ref<CreateAuctionForm>({
  type: null,
  productId: null,
  enabled: true,
  keys: [],
  onHand: null,
  autoRenew: true,
  price: {
    amount: null,
    currency: 'USD'
  },
  declaredStock: null
})

function updateForm(update: object) {
  const copy = { ...form.value, ...update }
  form.value = copy
}

const auctionKeys = ref<Array<string>>([])
function updateAuctionKeys(keys: Array<string>) {
  auctionKeys.value = keys
  form.value.keys = keys
  form.value.onHand = keys.length
}

const productName = ref<any>(null)
function updateProductName(product: string) {
  productName.value = product
}

const selectedProduct = ref<any>(null)
function updateSelectedProduct(product: Product) {
  selectedProduct.value = product
  form.value.productId = product?.id
}

const alertMessage = ref<string>('Please select keys to auction')
const showAlert = ref<boolean>(false)
const alertType = ref<string>('warning')

function goNext() {
  showAlert.value = false

  if (step.value === 1 && form.value.keys.length === 0) {
    showAlert.value = true
  }
  if (step.value === 2 && !form.value.productId) {
    alertMessage.value = 'Please select a product to auction'
    showAlert.value = true
  }
  console.log(!form.value.price.amount, !form.value.type)

  if (step.value === 3 && (!form.value.price.amount || !form.value.type)) {
    alertMessage.value = 'Please complete the form'
    showAlert.value = true
  }
  if (showAlert.value) {
    window.scrollTo(0, 0)
    return
  }
  step.value = step.value + 1
}

const auctionStore = useAuctionStore()
const inventoryStore = useInventoryStore()
const submitted = ref<boolean>(false)

function submit() {
  if (form.value.type && inventoryStore.singleInventory !== undefined) {
    busy.value = true
    auctionStore
      .createAuction(form.value.type, inventoryStore.singleInventory.sku, form.value)
      .then(({ data: { response } }) => {
        if (response.errors?.length > 0) {
          alertType.value = 'danger'
          console.log(response.errors)
          alertMessage.value = response.errors[0].message
        } else {
          console.log(response.data)
          alertType.value = 'success'
          alertMessage.value = 'Auction created successfully'
          submitted.value = true
        }
        showAlert.value = true
      })
      .catch()
      .finally(() => (busy.value = false))
  }
}

function restart() {
  step.value = 1
  form.value = {
    type: null,
    productId: null,
    enabled: true,
    keys: [],
    onHand: null,
    autoRenew: true,
    price: {
      amount: null,
      currency: 'USD'
    },
    declaredStock: null
  }
}
</script>

<style scoped></style>
