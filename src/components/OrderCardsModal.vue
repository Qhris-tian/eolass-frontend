<template>
  <Modal @close-modal="emit('close-modal')" :content-class="'w-[700px]'">
    <template v-slot:header>
      <div class="flex justify-between items-start">
        <h1 class="text-md mb-[24px] text-black">Order Cards</h1>
        <div>
          <button type="button" @click="emit('close-modal')">
            <SvgComponent name="close" />
          </button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500" aria-label="Order Cards Table">
          <thead class="text-xs text-gray uppercase bg-white">
            <th scope="col" class="px-6 py-3 text-center">Card Number</th>
            <th scope="col" class="px-6 py-3 text-center">Pin Code</th>
            <th scope="col" class="px-6 py-3 text-center">Expiry</th>
            <th scope="col" class="px-6 py-3 text-left">Claim URL</th>
          </thead>
          <tbody>
            <tr
              v-for="(card, index) in orderCards"
              :key="index"
              class="bg-white border border-line"
            >
              <td class="px-2 py-2 text-xs text-center">{{ card.card_number }}</td>
              <td class="px-2 py-2 text-xs text-center">{{ card.pin_code }}</td>
              <td class="px-2 py-2 text-xs text-center">{{ utils.placeholder(card.expire_date) }}</td>
              <td class="px-2 py-2 text-xs text-left">{{ card.claim_url }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import { useOrderStore } from '@/stores/order'
import { useUtils } from '@/composables/utils'

import SvgComponent from './ui/SvgComponent.vue'
import Modal from './BaseModal.vue'

const emit = defineEmits(['close-modal'])

const props = defineProps<{
  order: string
}>()

const utils = useUtils()

const orderStore = useOrderStore()
const orderCards = orderStore.cards[props.order]
</script>

<style scoped>
</style>