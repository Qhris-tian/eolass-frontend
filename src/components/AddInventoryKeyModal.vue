<template>
  <modal :content-class="'w-[350px] sm:w-[650px]'" position="top" @close-modal="emit('close-modal', 'none')">
    <template v-slot:header>
      <div class="block overflow-y-auto">
        <div class="flex justify-between items-start">
          <h1 class="text-lg mb-[24px] text-black dark:text-white capitalize">Add New Key</h1>
          <div>
            <button type="button" @click="emit('close-modal', 'none')">
              <SvgComponent name="close" />
            </button>
          </div>
        </div>
        <alert-component v-if="error" :type="'danger'" :message="error" class="w-full" @close-alert="error = null" />
      </div>
    </template>

    <template v-slot:body>
      <form @submit.prevent="submitKeys">
        <div class="mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900">Key <span class="text-danger">*</span></label>
          <input v-model="form.card_number" type="text" placeholder="Enter key" required
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple focus:purple block w-full p-2.5" />
        </div>
        <div class="mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900">PIN</label>
          <input v-model="form.pin_code" type="text" placeholder="Enter pin"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple focus:purple block w-full p-2.5" />
        </div>
        <div class="mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900">Expiry</label>
          <input v-model="form.expire_date" type="date" :min="today"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple focus:purple block w-full p-2.5" />
        </div>
        <div class="mb-3">
          <label class="block mb-2 text-sm font-medium text-gray-900">Claim URL</label>
          <input v-model="form.claim_url" type="text" placeholder="Enter claim url"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple focus:purple block w-full p-2.5" />
        </div>
        <div class="flex flex-row-reverse">
          <button-component :label="'Save'" :is-loading="busy" :loading-label="'Saving'" />
        </div>
      </form>
    </template>
  </modal>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue'
import type { Product } from '@/interfaces/inventory'
import axios from '@/configs/request'
import Modal from './BaseModal.vue'
import AlertComponent from '@/components/ui/AlertComponent.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'

const emit = defineEmits(['close-modal'])
const props = defineProps<{
  product: Product | null
}>()

const today = new Date().toJSON().slice(0, 10)
const error = ref<string | null>(null)
const busy = ref<boolean>(false)
const form = ref({
  card_number: null,
  pin_code: null,
  expire_date: null,
  claim_url: null
})

function submitKeys() {
  busy.value = true
  if (props.product) {

    axios
      .post(`/api/v1/inventory/${props.product.sku}/card`, {
        ...form
      })
      .then(({ data }) => {
        emit('close-modal', 'success')
      })
      .catch(() => (error.value = 'There was an error adding this key.'))
      .finally(() => (busy.value = false))
  }
}
</script>

<style scoped></style>
