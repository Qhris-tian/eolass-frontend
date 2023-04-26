<template>
  <div class="ml-[2rem] md:ml-[12rem]">
    <Navbar iconName="eneba" :showSearchBar="false" />
    <div class="mt-10">
      <h4 class="heading-xl uppercase">Auctions</h4>
    </div>
    <div>
      <div class="w-11/12 pt-5 flex justify-end">
        <button
          @click="showCreateAuctionModal = true"
          class="bg-purple py-3 px-5 mb-5 rounded hover:border border-line text-white text-[12px] font-medium flex justify-center items-center"
        >
          <img src="@/assets/plus.svg" width="23" height="23" class="pr-2" alt="" />
          <span>Create Auction</span>
        </button>
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

const showCreateAuctionModal = ref<boolean>(false)
const showUpdateAuctionModal = ref<boolean>(false)
const auctionData = ref({})

function toggleUpdateAuctionModal(auction: any) {
  showUpdateAuctionModal.value = true
  auctionData.value = auction
}
</script>

<style scoped></style>
