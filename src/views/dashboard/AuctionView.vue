<template>
  <div class="ml-[2rem] md:ml-[11rem] p-2 md:p-4 lg:p-8">
    <Navbar iconName="eneba" :showSearchBar="false" />
    <div class="mt-10">
      <h4 class="heading-xl uppercase dark:text-white">Auctions</h4>
    </div>
    <div>
      <div class="w-11/12 pt-5 flex justify-end">
        <router-link
          :to="{ name: 'auctions.create' }"
          class="bg-purple py-3 px-5 mb-5 rounded hover:border border-line text-white text-[12px] font-medium flex justify-center items-center"
        >
        <svg-component :name="'plus'" class="w-[24px] pr-2 text-white" />
          <span>Create Auction</span>
        </router-link>
      </div>
      <div class="flex justify-center">
          <alert-component
            v-show="rateLimitError"
            :type="'danger'"
            :message="
              rateLimitError ? rateLimitError : ''
            "
            class="w-[600px]"
            @close-alert="rateLimitError = null"
          />
        </div>
      <AuctionTable @toggleUpdateAuctionModal="toggleUpdateAuctionModal" />
    </div>
    <CreateAuctionModal
      :isOpen="showCreateAuctionModal"
      @closeModal="showCreateAuctionModal = false"
      title="Call of Duty: Modern Warfare II"
    />

    <UpdateAuctionModal
      :isUpdateAuctionModalOpen="showUpdateAuctionModal"
      :auctionData="auctionData"
      :existingAuctionKeys="existingAuctionKeys"
      @closeUpdateAuctionModal="showUpdateAuctionModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Navbar from '@/components/NavBar.vue'
import AuctionTable from '@/components/AuctionTable.vue'
import CreateAuctionModal from '@/components/CreateAuctionModal.vue'
import UpdateAuctionModal from '@/components/UpdateAuctionModal.vue'
import SvgComponent from '@/components/ui/SvgComponent.vue';
import axios from '@/configs/request'
import type { Key } from '@/interfaces/auction'
import AlertComponent from '@/components/ui/AlertComponent.vue'

const showCreateAuctionModal = ref<boolean>(false)
const showUpdateAuctionModal = ref<boolean>(false)
const auctionData = ref({})
const existingAuctionKeys = ref<Array<Key>>([])
const rateLimitError = ref<string | null>()

function toggleUpdateAuctionModal(auction: any) {
  // make request to get keys for current auction
  axios.get(`/api/v1/auctions/keys/${auction.node.id}?limit=10`)
  .then((data) => {
    showUpdateAuctionModal.value = true
    auctionData.value = auction
    existingAuctionKeys.value = data.data.response.data.S_keys.edges
  }).catch(({response}) => {
      if (response.status == 429) {
          rateLimitError.value = "You've reached your limit of 2000 requests in 10 minutes. Try again later.";
          console.log(rateLimitError.value)
      }
  })

}
</script>

<style scoped></style>
