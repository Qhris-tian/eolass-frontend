<template>
  <div class="p-4 ml-[7rem]">
    <header class="container relative flex justify-around items-center">
      <div class="logo">
        <SvgComponent name="ezpin" class="block text-purple w-[100px]" />
      </div>
      <div>
        <form class="w-[600px]" @submit.prevent="search">
          <div
            class="flex items-center bg-purple-light border border-purple/50 rounded-full shadow-sm"
          >
            <SvgComponent name="search" class="text-white w-7 absolute ml-5" />

            <div class="w-[600px] rounded-full">
              <input
                v-model="needle"
                type="text"
                aria-label="Search catalog"
                placeholder="Search catalog"
                autocomplete="off"
                class="flex bg-transparent min-h-[70px] w-[100%] placeholder:text-white indent-[55px] heading-xl text-white border-0 focus:outline-none relative z-10"
              />
            </div>
            <button v-show="needle" type="button" class="btn mr-6" @click="needle = null">
              <SvgComponent name="close" class="text-white" />
            </button>
          </div>
        </form>
      </div>
      <div class="environment">
        <label class="relative inline-flex items-center cursor-pointer">
          <input v-model="apiEnvironment" type="checkbox" value="" class="sr-only peer" />
          <div
            class="w-11 h-6 bg-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple"
          ></div>

          <span class="ml-3 heading-md text-gray-900">{{ apiEnvironment ? 'Live' : 'Test' }}</span>
        </label>
      </div>
    </header>
    <div class="container w-full p-10">
      <div class="px-5 flex justify-between">
        <h4 class="heading-xl uppercase">Catalog</h4>
        <AccountBalanceComponent />
      </div>

      <div class="flex flex-wrap">
        <div
          v-for="(product, index) in catalogStore.catalog"
          :key="index"
          class="relative flex flex-col w-[17rem] bg-white border border-gray/30 rounded-lg shadow-sm ml-6 mt-10"
        >
          <a href="#">
            <!-- Remove height for images if api return fixed images -->
            <object class="rounded-t-lg w-[100%] h-[250px]" :data="product.image" type="image/png">
              <img src="@/assets/default.svg" alt="Stack Overflow logo and icons and such" />
            </object>
          </a>
          <div class="p-5">
            <h4 class="mb-2 text-ellipsis overflow-hidden whitespace-nowrap heading-md capitalize">
              {{ product.title }}
            </h4>
            <p class="mb-2 heading-sm uppercase">{{ product.regions[0].name }}</p>
            <p>
              {{ product.currency.symbol }} {{ product.min_price }} - {{ product.currency.symbol }}
              {{ product.max_price }}
            </p>
            <button-component label="Order" class="!py-[0.6rem] mt-5" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import AccountBalanceComponent from '@/components/AccountBalanceComponent.vue'

import { useEnvironmentStore } from '@/stores/environment'
import { useCatalogStore } from '@/stores/catalog'
import { useAccountStore } from '@/stores/account'

const environmentStore = useEnvironmentStore()
const apiEnvironment = ref(environmentStore.environment)
watch(apiEnvironment, () => environmentStore.toggle())

const catalogStore = useCatalogStore()
onMounted(() => catalogStore.getCatalogData())

const needle = ref(null)
watch(needle, (value) => (value ? search() : null))

function search() {
  console.log(`searching for ${needle.value}...`)
}

const accountStore = useAccountStore()
onMounted(() => accountStore.getAccountData())

</script>

<style scoped>
</style>