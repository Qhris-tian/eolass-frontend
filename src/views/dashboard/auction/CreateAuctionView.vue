<template>
  <div class="ml-[2rem] sm:ml-[12rem] mt-5">
    <div>
      <div>
        <create-auction-progress :step="step" />
      </div>
      <div>
        <get-auction-keys-component v-show="step === 1" />
        <get-auction-product-component v-show="step === 2" />
        <complete-auction-component v-show="step === 3" />
      </div>
      <div class="flex">
        <button-component v-if="step > 1" type="button" :label="'Previous'" @click="step = step - 1" />
        <button-component v-if="step < 3" type="button" :label="'Next'" @click="step = step + 1" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CompleteAuctionComponent from '../../../components/auction/CompleteAuctionComponent.vue'
import GetAuctionKeysComponent from '../../../components/auction/GetAuctionKeysComponent.vue'
import GetAuctionProductComponent from '../../../components/auction/GetAuctionProductComponent.vue'
import CreateAuctionProgress from '../../../components/auction/CreateAuctionProgress.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'

const step = ref<number>(1)
</script>

<style scoped></style>