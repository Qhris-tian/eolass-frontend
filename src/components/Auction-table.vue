<template>
    
    <div class="relative overflow-x-auto shadow-md w-11/12">
        <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 dark:text-gray-400 bg-white">
                <tr class="border-b border-[#ccc]">
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        Product
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Price
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Status
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Units Sold
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            On Hand
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Expiry
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Actions
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(auction, index) in auctionStore.auctions" :key="index">
                    <tr class="bg-white border-b border-[#ccc]">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ auction['node']['product']['name'] }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ auction['node']['price']['amount'] }} ({{ auction['node']['price']['currency'] }})
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <button v-if="auction['node']['status'] == 'ACTIVE'" class="outline outline-offset-2 outline-1 w-20 py-1 px-2 text-[#6AE86A] rounded">
                                {{ auction['node']['status'] }}
                            </button>
                            <button v-else class="outline outline-offset-2 outline-1 w-20 py-1 px-2 text-[#00B8D4] rounded">
                                {{ auction['node']['status'] }}
                            </button>
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ auction['node']['unitsSold'] }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ auction['node']['onHand'] }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ getFormattedDate(auction['node']['expiresAt']) }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="flex">
                                <img src="@/assets/eye-on.svg" alt="n/a" width="20" height="20" class="cursor-pointer" @click="toggleAuctionView(index)">
                                <img src="@/assets/average-price.svg" alt="n/a" width="20" height="20">
                                <img src="@/assets/update.svg" alt="n/a" width="20" height="20">
                            </div>
                        </td>
                    </tr>
                    <div class="py-2 pl-5 font-medium text-left" :class="{ 'hidden': auctionRowStates[index] == false || auctionRowStates[index] == null }">
                        <div class="flex">
                            <div class="w-2/4">
                                <div v-if="auction['node']['declaredStock'] != null">Declared Stock: {{ auction['node']['declaredStock'] }}</div>
                                <div v-else class="">Declared Stock: N/A</div>
                            </div>
                            <div class="pl-20">Auto Renew: {{ auction['node']['autoRenew'] }}</div>
                        </div>
                        <div class="flex">
                            <div class="w-2/4">On Hold: {{ auction['node']['onHold'] }}</div>
                            <div class="pl-20">
                                <div v-if="auction['node']['position'] != null" class="">Position: {{ auction['node']['position'] }}</div>
                                <div v-else>Position: N/A</div>
                            </div>
                            <!-- <div class="pl-20">
                                <div>
                                    {{ getFormattedDate(auction['node']['createdAt']) }}
                                </div>
                            </div> -->
                        </div>
                    </div>
                </template>
            </tbody>
        </table>
    </div>

</template>

<script setup lang="ts">
import { useAuctionStore } from '@/stores/auctions'
import { onMounted, reactive } from 'vue';
import SvgComponent from './ui/SvgComponent.vue'

const auctionStore = useAuctionStore()
let auctionRowStates:any[] = reactive([])

onMounted(() => auctionStore.getAuctionData())

function getFormattedDate(date: string) {
    const d = new Date(date)
    return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
}

function toggleAuctionView(index: any) {
    if (auctionRowStates[index] == null) {
        auctionRowStates[index] = true;
    } else {
        auctionRowStates[index] = !auctionRowStates[index]
    }    
}

</script>

<style scoped>

</style>