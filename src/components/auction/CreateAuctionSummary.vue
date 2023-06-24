<template>
  <div class="ml-[2rem] mt-10 mr-10 py-10 px-10">
    <div class="heading-lg mb-4 dark:text-[#ccc]">Auction Summary</div>
    <div class="flex flex-col items-center">
      <div
        v-if="props.product"
        class="bg-white shadow-sm border border-line  min-w-[200px] sm:min-w-[450px] p-6 rounded-lg"
      >
        <div class="heading-md">{{ props.product?.name }}</div>
        <div class="mt-4">
          <h4 class="heading-sm text-gray-700 mb-4 border-b py-2 uppercase">Auction Details</h4>
          <div v-if="form.price.amount" class="flex justify-between mb-3">
            <span class="tracking-wide text-xs text-gray-600 uppercase">Price</span>
            <span>{{ form.price.currency }} {{ utils.toAmount(form.price.amount) }}</span>
          </div>
          <div class="flex justify-between mb-3">
            <span class="tracking-wide text-xs text-gray-600 uppercase">Auction Type</span>
            <span class="capitalize">{{ form.type }}</span>
          </div>
          <div class="flex justify-between mb-3">
            <span class="tracking-wide text-xs text-gray-600 uppercase">Keys</span>
            <span>
              <button @click="showKeysModal = true" class="text-purple hover:text-purple-light">
                View
              </button>
            </span>
          </div>
          <div class="flex justify-between mb-3">
            <span class="tracking-wide text-xs text-gray-600 uppercase">Keys On Hand</span>
            <span>
              {{ form.onHand }}
            </span>
          </div>
          <div class="flex justify-between mb-3">
            <span class="tracking-wide text-xs text-gray-600 uppercase">Auto Renew</span>
            <span class="capitalize">{{ form.autoRenew }}</span>
          </div>
        </div>
      </div>
    </div>
    <view-auction-keys-modal
      v-if="showKeysModal"
      :keys="form.keys"
      @close-modal="showKeysModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ViewAuctionKeysModal from './ViewAuctionKeysModal.vue'
import { useUtils } from '@/composables/utils'

import type { CreateAuctionForm, Product } from '@/interfaces/auction'

const utils = useUtils()

const props = defineProps<{
  product: Product
  form: CreateAuctionForm
}>()

const showKeysModal = ref<boolean>(false)
</script>

<style scoped></style>
