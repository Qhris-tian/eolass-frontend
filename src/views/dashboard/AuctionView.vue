<template>
    <div> 
        <Navbar iconName="eneba" />
        <div class="mt-20">
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