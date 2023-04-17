<template>

  <div v-if="isOpen" class="modal-mask fixed inset-0 bg-[rgba(0,0,0,0.6)] z-50 grid place-items-center">
    <div class="modal-container bg-white p-4 w-[80vw] max-w-[700px]">
        <header class="">
            <div class="flex justify-between font-medium">
                <div class="w-full flex justify-center text-center">
                    Create Auction<br>
                    {{ title }}
                </div>
                <div class="">
                    <img src="@/assets/close-icon.svg" @click="$emit('closeModal')" class="cursor-pointer" width="15" height="15" alt="">
                </div>
            </div>
        </header>
        <div class="font-medium text-sm pt-5">
            <div class="flex justify-center">
                <div class="w-full">
                    <!-- <form action=""> -->
                        <div class="flex">
                            <div class="mb-4 px-2 w-full md:w-6/12">
                                <label for="auctionType" class="block mb-1 text-sm">Auction Type:</label>
                                <select id="auctionType" class="w-full border px-4 pr-8 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none">
                                    <option value="plain">Plain</option>
                                    <option value="preorder">Pre Order</option>
                                    <option value="declaredstock">Declared Stock</option>
                                </select>
                            </div>
                            <div class="w-full md:w-6/12 flex items-center md:pl-20">
                                <label for="autoRenew" class="block mb-1 text-sm">AutoRenew:</label>
                                <input type="checkbox" class="w-4 h-4 ml-5 rounded focus:ring-blue-500">
                            </div>
                        </div>

                        <div class="mb-4 px-2 w-full md:w-6/12">
                            <label for="amount" class="block mb-1 text-sm">Amount:</label>
                            <div class="flex flex-row justify-between items-center">
                                <div class="mb-4 px-2 basis-1/4">
                                    <select id="currency" class="w-full border px-4 pr-8 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none">
                                        <option value="EUR">EUR</option>
                                        <option value="USD">USD</option>
                                    </select>
                                </div>
                                <div class="mb-4 px-2 basis-3/4">
                                    <input id="amount" required class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" autofocus placeholder="Amount" />
                                </div>
                            </div>
                        </div>

                        <!-- <div class="mb-4 px-2 w-full md:w-6/12">
                            <label for="keys" class="block mb-1 text-sm">Keys:</label>
                            <input id="keys" required class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" autofocus placeholder="Enter key" />
                        </div> -->
                        
                        <div class="mb-4 px-2 w-full md:w-6/12">
                            <label for="keys" class="block mb-1 text-sm">Keys:</label>
                            <MultipleInputComponent />
                        </div>
                        
                        <div class="flex justify-end px-10">
                            <button type="submit" 
                                @click="createAuction()"
                                class="focus:outline-none text-white bg-[#635FC7] hover:bg-[#635FC7] focus:ring-2 focus:ring-[#635FC7] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#635FC7] dark:hover:bg-[#A8A4FF] dark:focus:ring-[#635FC7]">
                                Proceed
                            </button>
                        </div>

                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
  </div>

</template>

<script setup lang="ts">
import MultipleInputComponent from './ui/MultipleInputComponent.vue';

defineProps({
    isOpen: Boolean,
    title: String
})

function createAuction() {
    alert('creating auction...')
}

</script>

<style scoped>
</style>