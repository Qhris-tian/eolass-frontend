<template>
    <div>
        <Navbar iconName="eneba" v-bind:showSearchBar=false />
        <div class="mt-10">
            <header>
                <span>Auctions for {{ singleProductStore.singleProductDetails.name }}</span>
            </header>
        </div>
        <div>
            <div class="w-11/12 pt-5 flex justify-end">
                <button @click="" class="bg-[#635FC7] py-3 px-5 mb-5 rounded hover:border border-[#E4EBFA] text-white text-[12px] font-medium flex justify-center items-center">
                    <img src="@/assets/update.svg" width="23" height="23" class="pr-2" alt="">
                    <span>Update Auction</span>
                </button>
            </div>
            <CompetitionTable :productAuctions="singleProductStore.singleProductAuctions" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Nav-bar.vue';
import CompetitionTable from '@/components/Competition-table.vue';

import { useSingleProductAuctionsStore } from '@/stores/auctions';
import { onMounted } from 'vue';

const singleProductStore = useSingleProductAuctionsStore()

onMounted(() => singleProductStore.getSingleProductDetails())

onMounted(() => singleProductStore.getSingleProductAuctionsData())


</script>

<style scoped>
</style>