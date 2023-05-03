import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/interfaces/auction'
import singleProductResponse from './json/single_product.json'
import axios from '@/configs/request'

const useAuctionStore = defineStore('auctions', () => {
    const auctions = ref({})

    function getAuctionData() {
        axios.get(`/api/v1/auctions?page=1&limit=10`).then(({ data }) => {
            auctions.value = data.auctions.edges
        })
    }

    return { auctions, getAuctionData }
});

const useSingleProductAuctionsStore = defineStore('singleProductAuctions', () => {
    const singleProductAuctions = ref({})
    const singleProductDetails = ref(<Product>{})

    function getSingleProductAuctionsData() {
        singleProductAuctions.value = singleProductResponse.data.S_product.auctions
    }

    function getSingleProductDetails() {
        singleProductDetails.value = singleProductResponse.data.S_product
    }

    return { singleProductAuctions, getSingleProductAuctionsData, singleProductDetails, getSingleProductDetails }
});

export { useAuctionStore, useSingleProductAuctionsStore }