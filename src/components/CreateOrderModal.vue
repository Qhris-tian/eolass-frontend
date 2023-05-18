<template>
  <Modal :content-class="'w-[350px] sm:w-[650px]'" position="top">
    <template v-slot:header>
      <div class="flex justify-between items-start">
        <alert-component
          v-show="error"
          :type="'danger'"
          :message="error ? error : 'There was an error processing you order.'"
          class="w-[400px]"
          @close-alert="error = null"
        />
        <h1 class="text-lg mb-[24px] text-black dark:text-white capitalize">
          {{ props.product?.title }}
        </h1>
        <div>
          <button type="button" @click="closeModal('none')">
            <SvgComponent name="close" />
          </button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="flex flex-wrap items-end">
        <div id="product-image" class="sm:w-[40%]">
          <object
            class="hidden sm:block rounded-t-lg w-full min-h-[260px]"
            :data="props.product?.image"
            type="image/png"
          >
            <img src="@/assets/default.svg" alt="Stack Overflow logo and icons and such" />
          </object>
          <div class="sm:bg-purple p-3 sm:text-white body-text">
            <p class="p-1">
              Activation Fee: <span>{{ props.product?.activation_fee }}</span>
            </p>
            <p class="p-1">
              Minimum Price: <span>{{ props.product?.min_price }}</span>
            </p>
            <p class="p-1">
              Maximum Price: <span>{{ props.product?.max_price }}</span>
            </p>
          </div>
        </div>
        <div class="w-full sm:w-[60%] px-5">
          <transition>
            <p
              v-show="canOrder"
              class="text-center p-2 sm:p-3 border mb-10"
              :class="available ? 'border-purple text-purple' : 'border-red-500 text-red-500'"
            >
              {{ available ? 'Available' : 'Unavailable' }}
            </p>
          </transition>
          <form @submit.prevent="request()">
            <div class="mb-2 flex items-center">
              <label class="mr-1 body-text w-20">Quantity</label>
              <input
                v-model="form.quantity"
                type="number"
                min="1"
                class="block px-1 py-3 border border-line w-full placeholder:p-2"
                placeholder="Enter number of products"
                required
                :disabled="canOrder"
              />
            </div>
            <div class="mb-2 flex items-center">
              <label class="mr-1 body-text w-20">Price</label>
              <input
                v-model="form.price"
                type="number"
                class="block px-1 py-3 border border-line w-full placeholder:p-2"
                placeholder="Enter price"
                :min="props.product?.min_price"
                :max="props.product?.max_price"
                required
                :disabled="canOrder"
              />
            </div>
            <div class="flex items-center mt-5">
              <div v-if="canOrder" class="flex items-center mr-3">
                <input
                  v-model="form.pre_order"
                  id="pre_order-checkbox"
                  type="checkbox"
                  class="w-4 h-4 bg-line border-line rounded-md accent-purple"
                  :required="!available"
                />
                <label for="pre_order-checkbox" class="ml-2 body-text">PreOrder</label>
              </div>
              <button-component
                :is-loading="isBusy"
                :label="canOrder ? 'Confirm Order' : 'Check Availability'"
                class="!py-2 w-full"
              />
            </div>
          </form>
          <div id="description" class="hidden sm:block mt-5 text-black/50">
            <!-- {{ props.product.description }} -->
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt maxime eos maiores
            quia minima id, architecto rerum doloribus cupiditate mollitia provident quaerat placeat
            tenetur possimus fuga harum dolorum odit molestias.
          </div>
        </div>
      </div>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { defineEmits, defineProps, ref } from 'vue'
import Modal from './BaseModal.vue'
import SvgComponent from './ui/SvgComponent.vue'
import ButtonComponent from './ui/ButtonComponent.vue'
import AlertComponent from './ui/AlertComponent.vue'
import type { Result } from '@/interfaces/catalog'
import axios from '@/configs/request'

const emit = defineEmits(['close-modal'])

const props = defineProps<{
  product: Result | null
}>()

const available = ref(false)
const canOrder = ref(false)
const error = ref(null)

const form = ref({
  price: null,
  quantity: null,
  pre_order: false
})

function closeModal(data: string) {
  form.value = {
    price: null,
    quantity: null,
    pre_order: false
  }
  available.value = false
  canOrder.value = false

  emit('close-modal', data)
}

function checkAvailability() {
  axios
    .get(`/api/v1/catalogs/${props.product?.sku}/availability`, {
      params: {
        ...form.value
      }
    })
    .then(({ data }) => {
      available.value = data.availability
      canOrder.value = true
    })
    .catch(({ response }) => {
      console.log(response)
      error.value = response
    })
}

const isBusy = ref<boolean>()
function order() {
  isBusy.value = true
  axios
    .post(`/api/v1/orders/`, {
      ...form.value,
      product_id: props.product?.sku
    })
    .then(() => {
      canOrder.value = false
      closeModal('success')
    })
    .finally(() => (isBusy.value = false))
}

function request() {
  if (canOrder.value) {
    order()
    return
  }

  checkAvailability()
}
</script>

<style></style>
