<template>
    <div class="relative overflow-x-auto shadow-md w-11/12">
        <table class="w-full text-[12px] text-center text-gray-500" aria-label="Auction Competition Table">
            <thead class="text-gray-700 bg-white dark:text-white dark:bg-black">
                <tr class="border-b border-[#ccc]">
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        Merchant Name
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center justify-center">
                            Amount
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 320 512"><path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z"/></svg></a>
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        In Stock
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-for="(auction, index) in productAuctions" :key="index">
                    <tr v-if="!auction.belongs_to_you" class="bg-white border-b border-[#ccc] dark:text-white dark:bg-black">
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ auction.merchant_name }}
                        </td>
                        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ auction.price.currency }}
                            {{ auction.price.amount }}
                        </th>
                        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                            {{ auction.is_in_stock }}
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">


defineProps({
    productAuctions: Object
})

</script>

<style scoped>
</style>