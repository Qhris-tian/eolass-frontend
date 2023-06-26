<template>
  <div>
    <div class="flex flex-row-reverse">
      <alert-component
        v-show="showAlert"
        :type="'success'"
        :message="alertMessage"
        class="w-full md:w-3/5"
        @close-alert="showAlert = !showAlert"
      />
    </div>
    <div class="relative flex flex-wrap">
      <div class="w-full md:w-3/5 sm:rounded-lg overflow-x-auto px-2">
        <div class="flex justify-between items-center mb-2">
          <h2 class="text-sm md:text-lg dark:text-white">Available Inventory</h2>
          <div>
            <input v-model="needle" type="text" placeholder="Search" class="h-7 md:h-8 dark:bg-[#2B2C37]" />
          </div>
        </div>
        <table
          class="w-full text-xs sm:text-sm text-left text-gray-500"
          aria-label="Inventory Table"
        >
          <thead class="text-xs text-gray uppercase bg-white dark:text-white dark:bg-black dark:border-b">
            <tr>
              <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">Product</th>
              <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-center">Region</th>
              <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-center">
                Created Date
              </th>
            </tr>
          </thead>
          <tbody>
            <template v-if="inventory.length > 0">
              <tr
                v-for="(product, index) in inventory"
                :key="index"
                class="bg-white border border-line cursor-pointer hover:bg-gray-100 
                  dark:text-white dark:bg-black dark:border-none"
                @click="selectProduct(product)"
              >
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
              <tr class="bg-white border border-line cursor-pointer hover:bg-gray-100 dark:text-white 
                dark:bg-black dark:border-none">
                <td v-if="!inventoryStore.inventoryLoaded" colspan="3" class="text-center pt-3">
                  <dot-loader-component :type="DotType.flashing" />
                </td>
                <td v-else colspan="3" class="text-center text-purple p-3">
                  No inventory available. Add product on the catalog page
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="w-full md:w-2/5 sm:rounded-lg overflow-x-auto px-2 mt-3 md:mt-0">
        <div class="flex justify-between items-center">
          <h2 class="text-sm md:text-lg dark:text-white">
            {{ selectedProduct?.title ? selectedProduct?.title : 'Product' }} Keys
          </h2>

          <div>
            <button
              v-if="selectedProduct"
              class="bg-purple px-3 py-2 rounded text-white text-[12px] flex justify-center items-center"
              @click="showAddKeyModal = true"
            >
              <svg-component :name="'plus'" class="w-4" />
              <span>Add Key</span>
            </button>
          </div>
        </div>
        <div class="overflow-x-auto mt-2">
          <table class="w-full text-sm text-left text-gray-500" aria-label="Inventory Cards Table">
            <thead class="text-xs text-gray uppercase bg-white dark:text-white dark:bg-black dark:border-b">
              <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">Number</th>
              <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-center">Pin</th>
              <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">Expiry</th>
              <th scope="col" class="px-1 sm:px-4 py-1 sm:py-2 uppercase text-left">URL</th>
            </thead>
            <tbody>
              <template v-if="productCards?.length > 0">
                <tr
                  v-for="(card, index) in productCards"
                  :key="index"
                  class="bg-white border border-line dark:text-white dark:bg-black dark:border-none"
                >
                  <td class="px-1 sm:px-6 py-1 sm:py-4 text-left text-xs">
                    {{ card.card_number }}
                  </td>
                  <td class="px-1 sm:px-6 py-1 sm:py-4 text-left text-xs">
                    {{ utils.placeholder(card.pin_code) }}
                  </td>
                  <td class="px-1 sm:px-6 py-1 sm:py-4 text-left text-xs">
                    {{ utils.placeholder(card.expire_date) }}
                  </td>
                  <td class="px-1 sm:px-6 py-1 sm:py-4 text-left text-xs">
                    {{ utils.placeholder(card.claim_url) }}
                  </td>
                </tr>
              </template>
              <template v-else>
                <tr class="bg-white border border-line cursor-pointer hover:bg-gray-100 
                  dark:text-white dark:bg-black dark:border-none">
                  <td colspan="4" v-if="loadingProductCard">
                    <dot-loader-component :type="DotType.flashing" />
                  </td>
                  <td v-else colspan="4" class="text-center text-base text-purple px-3 py-3">
                    {{ selectedProduct ? 'No keys available' : 'Select product to display keys.' }}
                  </td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <add-inventory-key-modal
      v-show="selectedProduct && showAddKeyModal"
      :product="selectedProduct"
      @close-modal="closeAddKeyModal"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import axios from '@/configs/request'
import { useUtils } from '@/composables/utils'
import type { Card, Product } from '@/interfaces/inventory'
import { useInventoryStore } from '@/stores/inventory'
import AlertComponent from '@/components/ui/AlertComponent.vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'
import AddInventoryKeyModal from '@/components/AddInventoryKeyModal.vue'
import DotLoaderComponent from './ui/DotLoaderComponent.vue'
import { DotType } from '@/enums/dottype'
const utils = useUtils()

const inventoryStore = useInventoryStore()

const message = ref<string>('Loading inventory')

const inventory = computed(() => {
  if (searching.value || needle.value.length) {
    return searchedProducts.value
  }
  return inventoryStore.inventory
})

const productCards = ref<Array<Card>>([])
const selectedProduct = ref<Product | null>(null)
const loadingProductCard = ref<boolean>(false)

function selectProduct(product: Product, refresh: boolean = false) {
  loadingProductCard.value = true
  if (product.sku !== selectedProduct.value?.sku || refresh) {
    selectedProduct.value = product

    axios
      .get(`/api/v1/inventory/${product.sku}/cards`)
      .then(({ data }) => (productCards.value = data))
      .finally(() => (loadingProductCard.value = false))
  }
}

const showAddKeyModal = ref<boolean>(false)
const showAlert = ref<boolean>(false)
const alertMessage = ref<string>('Key added successfully')

function closeAddKeyModal(state: string) {
  showAddKeyModal.value = false
  if (state === 'success' && selectedProduct.value) {
    showAlert.value = true
    alertMessage.value = 'Key addded sucessfully.'
    selectProduct(selectedProduct.value, true)
  }
}

const needle = ref<string>('')
const searching = ref(false)
const searchedProducts = ref<Array<Product>>([])

function searchInventory() {
  searching.value = true
  message.value = 'Searching ...'

  axios
    .get('/api/v1/inventory/search', {
      params: {
        name: needle.value
      }
    })
    .then(({ data }) => {
      if (typeof data !== 'undefined') {
        searchedProducts.value = data
      }
    })
    .finally(() => {
      searching.value = false
      message.value = 'No result found'
    })
}

watch(needle, (value) => {
  if (value.length > 6 && searchedProducts.value.length === 0) {
    return
  }
  searchInventory()
})
</script>

<style scoped></style>
