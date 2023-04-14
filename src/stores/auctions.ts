import { ref } from 'vue'
import { defineStore } from 'pinia'
import auctionResponse from './json/auction_response.json'

export const useAuctionStore = defineStore('auctions', () => {
    const auctions = ref({})

    function getAuctionData() {
        auctions.value = auctionResponse.data
    }

    return { auctions, getAuctionData }
})