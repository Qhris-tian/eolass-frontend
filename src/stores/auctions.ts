import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product, Auction } from '@/interfaces/auction'
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
    const singleProductAuctions = ref<Array<Auction>>()
    const singleProductDetails = ref(<Product>{})
    let auctionsMax: any = ref<number>()
    let auctionsMin: any = ref<number>()
    let auctionsAverage: any = ref<number>()

    function getSingleProductAuctionsData() {
        // singleProductAuctions.value = singleProductResponse.data.S_product.auctions
    }

    function getSingleProductDetails(productId: string) {
        axios.get(`/api/v1/products/${productId}`).then(({ data }) => {
            singleProductDetails.value = data
            singleProductAuctions.value = data.auctions

            const prices: any = singleProductAuctions.value?.map(auction => auction.price.amount)
            auctionsMax.value = Math.max(...prices)
            auctionsMin.value = Math.min(...prices)
            const totalAuctionsAmount = singleProductAuctions.value?.reduce((acc, item) => acc + item.price.amount, 0)
            if(singleProductAuctions.value !== undefined && totalAuctionsAmount !== undefined) {
                auctionsAverage.value = totalAuctionsAmount / singleProductAuctions.value.length
            }
        })
    }

    return { singleProductAuctions, getSingleProductAuctionsData, 
        singleProductDetails, getSingleProductDetails,
        auctionsAverage, auctionsMax, auctionsMin }
});

export { useAuctionStore, useSingleProductAuctionsStore }