import { ref } from 'vue'
import { defineStore } from 'pinia'
import auctionResponse from './json/auction_response.json'
import singleProductResponse from './json/single_product.json'

const useAuctionStore = defineStore('auctions', () => {
    const auctions = ref({})

    function getAuctionData() {
        auctions.value = auctionResponse.data
    }

    return { auctions, getAuctionData }
});

const useSingleProductAuctionsStore = defineStore('singleProductAuctions', () => {
    const singleProductAuctions = ref({})
    const singleProductDetails = ref({})

    function getSingleProductAuctionsData() {
        singleProductAuctions.value = singleProductResponse.data.S_product.auctions.edges
    }

    function getSingleProductDetails() {
        singleProductDetails.value = singleProductResponse.data.S_product
    }

    return { singleProductAuctions, getSingleProductAuctionsData, singleProductDetails, getSingleProductDetails }
});

export { useAuctionStore, useSingleProductAuctionsStore }