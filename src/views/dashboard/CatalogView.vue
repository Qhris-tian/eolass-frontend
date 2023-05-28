<template>
  <div class="md:p-4 lg:p-8 md:ml-[7rem] p-2">
    <header class="flex items-center mb-4 px-2 md:px-14">
      <div class="hidden sm:block logo md:w-1/4">
        <SvgComponent name="ezpin" class="block text-purple w-[50px] md:w-[80px]" />
      </div>
      <div class="w-full md:w-3/4 flex justify-between items-center">
        <form class="md:w-[500px]" @submit.prevent="search">
          <div
            class="flex items-center bg-purple-light border border-purple/50 rounded-full shadow-sm"
          >
            <SvgComponent name="search" class="text-white w-5 sm:w-7 absolute ml-3 sm:ml-5" />

            <div class="w-full rounded-full">
              <input
                v-model="needle"
                type="text"
                aria-label="Search catalog"
                placeholder="Search catalog"
                autocomplete="off"
                class="flex bg-transparent h-[35px] md:h-[60px] w-[100%] placeholder:text-white indent-5 sm:indent-[55px] heading-xl text-white border-0 focus:outline-none relative z-10"
              />
            </div>
            <button v-show="needle" type="button" class="mr-2 sm:mr-6" @click="needle = null">
              <SvgComponent name="close" class="text-white" />
            </button>
          </div>
        </form>
        <environment-component />
      </div>
    </header>
    <div class="flex justify-end mt-2 md:mt-4">
      <alert-component
        v-show="showAlert"
        :type="alertType ? 'success' : 'danger'"
        :message="
          alertType ? 'Order placed successfully!' : 'There was an error processing you order.'
        "
        class="w-[400px]"
        @close-alert="showAlert = !showAlert"
      />
    </div>
    <div class="w-full p-2 md:p-10 pt-1 md:pt-3">
      <div class="p-2 sm:px-5 flex justify-between">
        <h4 class="heading-xl uppercase">Catalog</h4>
        <AccountBalanceComponent />
      </div>

      <div v-if="loading">
        <dot-loader-component :type="DotType.collision" />
      </div>

      <div v-if="fetchError" class="text-center text-purple">There was error fetching the catalog.</div>

      <div v-else class="flex flex-wrap">
        <template v-for="(product, index) in catalogStore.catalog?.results" :key="index">
          <catalog-product-component :product="product" @select-product="selectProduct" />
        </template>
      </div>
    </div>
    <CreateOrderModalVue
      v-show="showCreateOrderModal"
      :product="selectedProduct"
      @close-modal="closeOrderModal"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'
import AlertComponent from '@/components/ui/AlertComponent.vue'
import AccountBalanceComponent from '@/components/AccountBalanceComponent.vue'
import CreateOrderModalVue from '@/components/CreateOrderModal.vue'
import EnvironmentComponent from '@/components/EnvironmentComponent.vue'
import CatalogProductComponent from '@/components/catalog/CatalogProductComponent.vue'

import { useCatalogStore } from '@/stores/catalog'
import { useAccountStore } from '@/stores/account'
import type { Result } from '@/interfaces/catalog'
import { DotType } from '@/enums/dottype'
import DotLoaderComponent from '@/components/ui/DotLoaderComponent.vue'

const loading = ref<boolean>(true)
const fetchError = ref<boolean>(false)

const catalogStore = useCatalogStore()
onMounted(() => {
  catalogStore
    .getCatalogData()
    .then(({ data }) => {
      catalogStore.setCatalogData(data)
    })
    .catch(() => (fetchError.value = true))
    .finally(() => (loading.value = false))
})

const needle = ref(null)
watch(needle, (value) => (value ? search() : null))

function search() {
  console.log(`searching for ${needle.value}...`)
}

const accountStore = useAccountStore()
onMounted(() => accountStore.getAccountData())

const showCreateOrderModal = ref(false)
const selectedProduct = ref<Result | null>(null)

const selectProduct = (product: Result) => {
  selectedProduct.value = product

  showCreateOrderModal.value = true
}
const showAlert = ref(false)
const alertType = ref(false)

function closeOrderModal(data: string) {
  if (data !== 'none') {
    showAlert.value = true
    alertType.value = data === 'success'
    window.scrollTo(0, 0)
  }
  showCreateOrderModal.value = false
}
</script>

<style scoped></style>
