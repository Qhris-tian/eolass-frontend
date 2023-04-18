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
                                <select id="auctionType" v-model="auctionType" class="w-full border px-4 pr-8 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none">
                                    <option value="plain">Plain</option>
                                    <option value="preorder">Pre Order</option>
                                    <option value="declaredstock">Declared Stock</option>
                                </select>
                            </div>
                            <div class="w-full md:w-6/12 flex items-center md:pl-20">
                                <label for="autoRenew" class="block mb-1 text-sm mr-2">AutoRenew:</label>

                                <label class="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" value="" v-model="autoRenew" class="sr-only peer">
                                <div class="w-11 h-6 bg-[#ccc] peer-focus:outline-none rounded-full peer dark:bg-[#A8A4FF] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-[#A8A4FF] peer-checked:bg-[#A8A4FF]"></div>
                                </label>

                            </div>
                        </div>

                        <div class="flex flex-wrap">
                            <div class="mb-4 px-2 w-full md:w-6/12">
                                <label for="amount" class="block mb-1 text-sm">Amount:</label>
                                <div class="flex flex-row justify-between items-center">
                                    <div class="mb-4 basis-1/4">
                                        <select id="currency" v-model="currency" class="w-full border py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none">
                                            <option value="EUR">EUR</option>
                                            <option value="USD">USD</option>
                                        </select>
                                    </div>
                                    <div class="mb-4 px-2 basis-3/4">
                                        <input id="amount" v-model="amount" required class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="text" placeholder="Amount" />
                                    </div>
                                </div>
                            </div>

                            <div v-if="auctionType == 'preorder'" class="w-full md:w-6/12 flex items-center md:pl-20 pl-2">
                                <label for="onHand" class="block mb-1 text-sm pr-4">On Hand:</label>
                                <input id="onHand" v-model="onHand" required class="w-[40%] border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="number" placeholder="onHand" />
                            </div>
                            <div v-if="auctionType == 'declaredstock'" class="w-full md:w-6/12 flex items-center md:pl-20 pl-2">
                                <label for="declaredStock" class="block mb-1 text-sm pr-4">Declared Stock:</label>
                                <input id="declaredStock" v-model="declaredStock" required class="w-[40%] border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none" type="number" placeholder="declared stock" />
                            </div>
                        </div>
                        
                        <div class="mb-4 px-2 w-full md:w-6/12">
                            <label for="keys" class="block mb-1 text-sm">Keys:</label>
                            <MultipleInputComponent v-model="newKey" @updateNewItem="updateNewKey" 
                                @addProductKey="addProductKey"
                                @removeProductKey="removeProductKey"
                                :items="productKeys"
                                :newItem="newKey" />
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
import { ref, reactive } from 'vue';
import MultipleInputComponent from './ui/MultipleInputComponent.vue';

let auctionType = ref('plain');
let autoRenew = ref(false);
let currency = ref('EUR');
let amount = ref(0);
let newKey = ref('');
let productKeys:String[] = reactive([]);
let onHand = ref(0);
let declaredStock = ref(0);

defineProps({
    isOpen: Boolean,
    title: String
});

function updateNewKey(value) {
    newKey.value = value;
}

function addProductKey() {
    if (newKey.value.trim() !== '') {
        productKeys.push(newKey.value.trim());
        newKey.value = '';
    }
}

function removeProductKey(index) {
    productKeys.splice(index, 1);
}

function createAuction() {
    console.log('creating auction...');
}

</script>

<style scoped>
</style>