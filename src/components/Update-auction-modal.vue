<template>

    <div v-if="isUpdateAuctionModalOpen" class="modal-mask fixed inset-0 bg-[rgba(0,0,0,0.6)] z-50 grid place-items-center">
      <div class="modal-container bg-white p-4 w-[80vw] max-w-[700px]">
          <header class="">
              <div class="flex justify-between font-medium">
                  <div class="w-full flex justify-center text-center">
                      Update Auction for<br>
                      {{ auctionData?.node.product.name }}
                  </div>
                  <div class="">
                      <img src="@/assets/close-icon.svg" @click="$emit('closeUpdateAuctionModal')" class="cursor-pointer" width="15" height="15" alt="">
                  </div>
              </div>
          </header>
          <div class="font-medium text-sm pt-5">
              <div class="flex justify-center">
                  <div class="w-full">
                      <!-- <form action=""> -->
  
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

defineProps({
    isUpdateAuctionModalOpen: Boolean,
    auctionData: Object
});


</script>

<style scoped>
</style>