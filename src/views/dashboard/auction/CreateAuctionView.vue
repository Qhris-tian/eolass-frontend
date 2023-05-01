<template>
  <div class="ml-[2rem] md:ml-[12rem] mt-5">
    <div>
      <div>
        <create-auction-progress :step="step" />
      </div>
      <div>
        <get-auction-keys-component v-if="step === 1" @change-step="changeStep" />
        <get-auction-product-component v-if="step === 2" @change-step="changeStep" />
        <complete-auction-component v-if="step === 3" @change-step="changeStep" />
      </div>
      <div class="flex">
        <button-component
          v-if="step > 1"
          type="button"
          :label="'Previous'"
          @click="step = step - 1"
        />
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
function changeStep(value: number) {
  step.value - value
}
</script>

<style scoped>
</style>