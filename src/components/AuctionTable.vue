<template>
    
    <div class="relative overflow-x-auto shadow-md w-11/12">
        <div class="flex justify-center">
          <alert-component
            v-show="auctionStore.rateLimitError"
            :type="'danger'"
            :message="
              auctionStore.rateLimitError ? auctionStore.rateLimitError : ''
            "
            class="w-[600px]"
            @close-alert="auctionStore.rateLimitError = null"
          />
        </div>
        <!-- <div class="mb-2">
          <select v-model="auctionStatus" name="auction-status" id="auction-status" class="px-4 py-2 border border-[#ccc]">
            <option value="ACTIVE">ACTIVE</option>
            <option value="INACTIVE">INACTIVE</option>
            <option value="CONFIRMATION_PENDING">CONFIRMATION_PENDING</option>
            <option value="REJECTED">REJECTED</option>
            <option value="DISABLED">DISABLED</option>
          </select>
        </div> -->
        <table class="w-full text-[12px] text-center text-gray-500" aria-label="Auction Table">
            <thead class="text-gray-700 bg-white dark:text-white dark:bg-black">
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
                <template v-if="auctionStore.auctions?.length == 0">
                    <div class="flex justify-center p-2 dark:text-white dark:bg-black">
                        No auctions available
                    </div>
                </template>
                <template v-for="(auction, index) in auctionStore.auctions" :key="index">
                    <tr class="bg-white border-b border-[#ccc] dark:text-white dark:bg-black">
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ auction['node']['product']['name'] }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ auction['node']['price']['amount'] }} ({{ auction['node']['price']['currency'] }})
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <button v-if="auction['node']['status'] == 'ACTIVE'" class="outline outline-offset-2 outline-1 w-20 py-1 px-2 text-[#6AE86A] rounded">
                                {{ auction['node']['status'] }}
                            </button>
                            <button v-else class="outline outline-offset-2 outline-1 w-20 py-1 px-2 text-info rounded">
                                {{ auction['node']['status'] }}
                            </button>
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ auction['node']['unitsSold'] }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ auction['node']['onHand'] }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ getFormattedDate(auction['node']['expiresAt']) }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            <div class="flex">
                                <img :src="auctionRowStates[index] == false || auctionRowStates[index] == null ? eyeOnIcon : eyeOffIcon" 
                                    alt="n/a" width="18" height="18" class="cursor-pointer" @click="toggleAuctionView(index)">
                                
                                <router-link :to="{name: 'competition', params: {id: auction['node']['id'], productId: auction['node']['product']['id']}}">
                                    <img src="@/assets/average-price.svg" alt="n/a" width="18" height="18">
                                </router-link>

                                <img src="@/assets/update.svg" alt="n/a" width="18" height="18" class="cursor-pointer" @click="handleUpdateAuctionModalToggle(auction)">
                            </div>
                        </td>
                    </tr>
                    <tr class="border dark:bg-[#F4F7FD] border-none">
                        <td>
                            <div class="py-2 pl-5 font-medium text-left" 
                                :class="{ 'hidden': auctionRowStates[index] == false || auctionRowStates[index] == null }">
                                <div class="flex w-full">
                                    <div class="w-2/4">
                                        <div v-if="auction['node']['declaredStock'] != null">Declared Stock: {{ auction['node']['declaredStock'] }}</div>
                                        <div v-else >Declared Stock: N/A</div>
                                    </div>
                                    <div class="pl-2 w-2/4">Auto Renew: {{ auction['node']['autoRenew'] }}</div>
                                </div>
                                <div class="flex">
                                    <div class="w-2/4">On Hold: {{ auction['node']['onHold'] }}</div>
                                    <div class="pl-2">
                                        <div v-if="auction['node']['position'] != null" >Position: {{ auction['node']['position'] }}</div>
                                        <div v-else>Position: N/A</div>
                                    </div>
                                    <!-- <div class="pl-20">
                                        <div>
                                            {{ getFormattedDate(auction['node']['createdAt']) }}
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </td>
                        <td colspan="6"></td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>

    <div class="w-11/12 pt-5 flex justify-end text-[12px]">
        <button
            class="bg-white py-3 px-5 mr-2 rounded border hover:bg-light border-line text-[#828FA3] 
            font-medium flex justify-center items-center"
            @click="paginateAuctions(auctionStore.startCursor)">
            <img src="@/assets/back-icon.svg" class="pr-2" alt="">
            <span>Previous</span>
        </button>

        <button 
            class="bg-white py-3 px-5 rounded border hover:bg-light border-line text-[#828FA3] 
            font-medium flex justify-center items-center"
            @click="paginateAuctions(auctionStore.endCursor)">
            <span class="pr-2">Next</span>
            <img src="@/assets/forward-icon.svg" class="pr-2" alt="">
        </button>
    </div>

</template>

<script setup lang="ts">
import { useAuctionStore } from '@/stores/auctions'
import { onMounted, reactive, defineEmits, ref } from 'vue'
import eyeOnIcon from '@/assets/eye-on.svg'
import eyeOffIcon from '@/assets/eye-off.svg'
import AlertComponent from './ui/AlertComponent.vue'

const emit = defineEmits(['toggleUpdateAuctionModal']);

const handleUpdateAuctionModalToggle = (auction:Object) => {
    emit('toggleUpdateAuctionModal', auction);
}

// const auctionStatus = ref("ACTIVE");

const auctionStore = useAuctionStore()
const auctionRowStates:any[] = reactive([])

onMounted(() => auctionStore.getAuctionData())

function paginateAuctions(cursor: string | undefined)  {
    auctionStore.getAuctionData(cursor);
}

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

// function getCompetitionPageUrl(id: string, productId: string): string {
//     // console.log(productId)
//     return `auction/${id}/competition`;
// }

</script>

<style scoped>

</style>