<template>
    <div> 
        <Navbar iconName="eneba" v-bind:showSearchBar=false />
        <div class="mt-10">
            <header>
                <span>Auctions</span>
            </header>
        </div>
        <div>
            <AuctionTable />
        </div>
    </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Nav-bar.vue'
import AuctionTable from '@/components/Auction-table.vue';
</script>

<style scoped>

</style>