<template>
    <div class="ml-[2rem] md:ml-[12rem]"> 
        <Navbar iconName="eneba" v-bind:showSearchBar=false />
        <div class="mt-10">
            <header class="font-semibold">
                <span>Auctions</span>
            </header>
        </div>
        <div>
            <div class="w-11/12 pt-5 flex justify-end">
                <button @click="showCreateAuctionModal = true" class="bg-[#635FC7] py-3 px-5 mb-5 rounded hover:border border-[#E4EBFA] text-white text-[12px] font-medium flex justify-center items-center">
                    <img src="@/assets/plus.svg" width="23" height="23" class="pr-2" alt="">
                    <span>Create Auction</span>
                </button>
            </div>
            <AuctionTable @toggleUpdateAuctionModal="toggleUpdateAuctionModal" />
        </div>
        <CreateAuctionModal :isOpen="showCreateAuctionModal" @closeModal="showCreateAuctionModal = false"
            title="Call of Duty: Modern Warfare II" />

        <UpdateAuctionModal :isUpdateAuctionModalOpen="showUpdateAuctionModal"
        :auctionData="auctionData"
         @closeUpdateAuctionModal="showUpdateAuctionModal = false" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/components/Nav-bar.vue';
import AuctionTable from '@/components/Auction-table.vue';
import CreateAuctionModal from '@/components/Create-auction-modal.vue';
import UpdateAuctionModal from '@/components/Update-auction-modal.vue';

let showCreateAuctionModal = ref(false);
let showUpdateAuctionModal = ref(false);
let auctionData = ref({});

function toggleUpdateAuctionModal(auction:any) {
    showUpdateAuctionModal.value = true;
    auctionData = auction;
}

</script>

<style scoped>

</style>