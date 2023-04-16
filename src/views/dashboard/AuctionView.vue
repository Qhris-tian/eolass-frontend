<template>
    <div> 
        <Navbar iconName="eneba" v-bind:showSearchBar=false />
        <div class="mt-10">
            <header>
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
            <AuctionTable />
        </div>
        <CreateAuctionModal :isOpen="showCreateAuctionModal" @closeModal="showCreateAuctionModal = false"
            title="Call of Duty: Modern Warfare II" />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Navbar from '@/components/Nav-bar.vue';
import AuctionTable from '@/components/Auction-table.vue';
import CreateAuctionModal from '@/components/Create-auction-modal.vue';

let showCreateAuctionModal = ref(false);

</script>

<style scoped>

</style>