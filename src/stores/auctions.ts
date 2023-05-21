import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product, Auction, CreateAuctionForm } from '@/interfaces/auction'
import axios from '@/configs/request'

const useAuctionStore = defineStore('auctions', () => {
    const auctions = ref()
    const endCursor = ref<string>()
    const startCursor = ref<string>()
    const hasNextPage = ref()
    const hasPreviousPage = ref()
    const rateLimitError = ref<string | null>(null)

    function getAuctionData(page = "") {
        axios.get(`/api/v1/auctions?page=${page}&limit=5`).then(({ data }) => {
            auctions.value = data.auctions.edges
            endCursor.value = data.auctions.pageInfo.endCursor
            startCursor.value = data.auctions.pageInfo.startCursor
            hasNextPage.value = data.auctions.pageInfo.hasNextPage
            hasPreviousPage.value = data.auctions.pageInfo.hasPreviousPage
        })
        .catch(error => {
            if (error.code == "ERR_NETWORK") {
                rateLimitError.value = "You've reached your limit of 2000 requests in 10 minutes. Try again later.";
                console.log(rateLimitError.value)
            }
          })
    }

    function createAuction(type:string, auctionForm: CreateAuctionForm) {
        return axios.post(`/api/v1/auctions/?type=${type}`, {...auctionForm})
    }

    return { auctions, getAuctionData, createAuction, endCursor, startCursor, hasNextPage, hasPreviousPage, rateLimitError }
});

const useSingleProductAuctionsStore = defineStore('singleProductAuctions', () => {
    const singleProductAuctions = ref<Array<Auction>>()
    const singleProductDetails = ref(<Product>{})
    const auctionsMax: any = ref<number>()
    const auctionsMin: any = ref<number>()
    const auctionsAverage: any = ref<number>()

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