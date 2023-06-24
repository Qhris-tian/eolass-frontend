<template>
  <div class="ml-[2rem] md:ml-[11rem] p-2 md:p-4 lg:p-8">
    <Navbar iconName="eneba" :showSearchBar="false" />
    <div class="mt-10 dark:text-white">
      <header>
        <span>Auctions for {{ singleProductStore.singleProductDetails?.name }}</span>
      </header>
    </div>

    <div>
      <div class="w-11/12 pt-5 flex justify-between items-center">
        <div class="w-[40%] md:w-[30%] flex justify-between font-medium text-[13px] mb-5 dark:text-[#ccc]">
          <span>AVERAGE: {{ singleProductStore.auctionsAverage }}</span>
          <span>MAX: {{ singleProductStore.auctionsMax }}</span>
          <span>MIN: {{ singleProductStore.auctionsMin }}</span>
        </div>
        <div>
          <button
            class="bg-purple py-3 px-5 mb-5 rounded hover:border border-line text-white text-[12px] font-medium flex justify-center items-center"
          >
            <img src="@/assets/update.svg" width="23" height="23" class="pr-2" alt="" />
            <span>Update Auction</span>
          </button>
        </div>
      </div>
      <CompetitionTable :productAuctions="singleProductStore.singleProductAuctions" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import CompetitionTable from '@/components/CompetitionTable.vue'

import { useSingleProductAuctionsStore } from '@/stores/auctions'
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const singleProductStore = useSingleProductAuctionsStore()
const route = useRoute()
const productId: string = typeof route.params.productId === 'string' ? route.params.productId: route.params.productId[0]

onMounted(() => {
  singleProductStore.getSingleProductDetails(productId)
  // singleProductStore.getSingleProductAuctionsData()
})
</script>

<style scoped>
</style>