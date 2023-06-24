<template>
  <div class="w-450 container mx-auto my-5 ml-[2rem] mr-10 py-6 sm:px-10">
    <h2 class="heading-lg mb-4 dark:text-white">Select Keys</h2>
    <div class="flex justify-center">
      <div class="relative my-3 w-[50%]">
        <form @submit.prevent="searchInventory">
          <div
            class="flex items-center bg-purple-light border border-purple/50 rounded h-10 shadow-sm"
          >
            <svg-component name="search" class="text-white w-6 h-6 absolute ml-5" />

            <div class="w-full rounded">
              <input
                v-model="needle"
                type="text"
                aria-label="Search catalog"
                placeholder="Search inventory"
                autocomplete="off"
                class="flex bg-transparent h-[40px] md:h-[60px] w-[100%] placeholder:text-white text-center text-white border-0 focus:outline-none relative z-10"
              />
            </div>
            <button v-show="needle" type="button" class="btn mr-6" @click="needle = null">
              <svg-component name="close" class="text-white" />
            </button>
          </div>
        </form>
        <div class="absolute z-10 bg-white rounded-b-lg shadow-md mt-2 w-full">
          <ul v-if="showSearch">
            <li
              v-for="(item, index) in searchedItems"
              :key="index"
              @click="selectProduct(item)"
              class="w-full text-gray-700 p-4 mt-2 bg-white cursor-pointer hover:bg-gray-100"
            >
              {{ item.title }} {{ item?.region }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap mt-10">
      <div class="w-full md:max-w-[45%] px-3 order-2 md:order-1">
        <p class="heading-lg dark:text-[#ccc]">Available Inventory</p>
        <ul>
          <li
            class="border p-3 border-line bg-white hover:bg-gray-50"
            v-for="(product, index) in availableInventory"
            :key="index"
          >
            <button @click="selectProduct(product)" class="w-full flex justify-between items-center">
              <span>{{ product.title }}</span>
              <span>
                <svg-component :name="'chevron-right'" class="text-purple" />
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div class="w-full md:max-w-[55%] px-3 order-1 md:order-2">
        <p class="heading-lg dark:text-white">
          {{ selectedProduct?.title ? selectedProduct?.title : 'Product' }} Keys
        </p>
        <ul v-if="productCards.length > 0">
          <li v-for="(card, index) in productCards" :key="index">
            <div class="flex items-center mr-3">
              <input
                @input="updateAuctionKeys"
                :id="card.card_number"
                type="checkbox"
                class="w-4 h-4 bg-line border-line rounded-md accent-purple"
                :value="card.card_number"
              />
              <label :for="card.card_number" class="ml-2 body-text dark:text-[#ccc]">{{ card.card_number }}</label>
            </div>
          </li>
        </ul>
        <p v-else class="mt-2 dark:text-[#ccc]">
          {{
            selectedProduct?.title
              ? 'Product has no keys associated with it.'
              : 'Choose product to show keys'
          }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, defineEmits } from 'vue'
import SvgComponent from '../ui/SvgComponent.vue'
import type { Product, Card } from '@/interfaces/inventory'
import axios from '@/configs/request'

const emit = defineEmits(['update-auction-keys', 'update-product-name'])

const availableInventory = ref<Array<Product>>([])
onMounted(() => {
  axios
    .get('/api/v1/inventory/', { params: { limit: 5 } })
    .then(({ data }) => {
      availableInventory.value = data
    })
    .catch()
})

const needle = ref(null)
const showSearch = ref<boolean>(false)
const searchedItems = ref<Array<Product>>([])

watch(needle, (value) => {
  if (value) {
    showSearch.value = true
    searchInventory()
  } else {
    searchedItems.value = []
  }
})

function searchInventory() {
  axios
    .get('/api/v1/inventory/search', {
      params: {
        name: needle.value
      }
    })
    .then(({ data }) => {
      searchedItems.value = data
    })
}

const selectedProduct = ref<Product>()
const productCards = ref<Array<Card>>([])
function selectProduct(product: Product) {
  if (product.sku !== selectedProduct.value?.sku) {
    selectedProduct.value = product

    axios.get(`/api/v1/inventory/${product.sku}/cards`).then(({ data }) => {
      productCards.value = data
      searchedItems.value = []
      emit('update-product-name', selectedProduct.value?.title ?? null)
    })
  }
  searchedItems.value = []
  needle.value = null
}

const auctionKeys: Array<string> = []

const updateAuctionKeys = (event: Event) => {
  const target = event.target as HTMLInputElement
  if (!auctionKeys.includes(target.value)) {
    auctionKeys.push(target.value)
  } else {
    const index = auctionKeys.indexOf(target.value)
    auctionKeys.splice(index, 1)
  }

  emit('update-auction-keys', auctionKeys)
}
</script>

<style scoped></style>
