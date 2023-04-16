<template>
  <Modal @close-modal="closeModal('none')" :content-class="'w-[650px]'" position="top">
    <template v-slot:header>
      <div class="flex justify-between items-start">
        <h1 class="text-lg mb-[24px] text-black dark:text-white capitalize">
          {{ props.product.title }}
        </h1>
        <div>
          <button type="button" @click="closeModal('none')">
            <SvgComponent name="close" />
          </button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="flex items-end">
        <div id="product-image" class="w-[40%]">
          <object
            class="rounded-t-lg w-full min-h-[260px]"
            :data="props.product.image"
            type="image/png"
          >
            <img src="@/assets/default.svg" alt="Stack Overflow logo and icons and such" />
          </object>
          <div class="bg-purple p-3 text-white">
            <p class="p-1">
              Activation Fee: <span>{{ props.product.activation_fee }}</span>
            </p>
            <p class="p-1">
              Minimum Price: <span>{{ props.product.min_price }}</span>
            </p>
            <p class="p-1">
              Maximum Price: <span>{{ props.product.max_price }}</span>
            </p>
          </div>
        </div>
        <div class="w-[60%] px-5">
          <transition>
              <p
                v-show="canOrder"
                class="text-center p-3 border mb-10"
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
                :min="props.product.min_price"
                :max="props.product.max_price"
                required
                :disabled="canOrder"
              />
            </div>
            <div class="flex items-center mt-5">
              <div v-if="canOrder" class="flex items-center mr-3">
                <input
                  v-model="form.preorder"
                  id="preorder-checkbox"
                  type="checkbox"
                  class="w-4 h-4 bg-line border-line rounded-md accent-purple"
                  :required="!available"
                />
                <label for="preorder-checkbox" class="ml-2 body-text">Preorder</label>
              </div>
              <button-component
                :label="canOrder ? 'Confirm Order' : 'Check Availability'"
                class="!py-2"
              />
            </div>
          </form>
          <div id="description" class="mt-5 text-black/50">
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
import Modal from './Modal.vue'
import SvgComponent from './ui/SvgComponent.vue'
import ButtonComponent from './ui/ButtonComponent.vue'

const emit = defineEmits(['close-modal'])

const props = defineProps<{
  product: object
}>()

const available = ref(false)
const canOrder = ref(false)

const form = ref({
  price: null,
  quantity: null,
  preorder: null
})

function closeModal(data: string) {
  form.value = {
    price: null,
    quantity: null,
    preorder: null
  }
  available.value = false
  canOrder.value = false

  emit('close-modal', data)
}

function checkAvailability() {
  // make api request to check availability
  console.log('checking availability')

  available.value = false
  canOrder.value = true
}

function order() {
  // make api request to order
  console.log('placing order. hang tight...')
  canOrder.value = false
  closeModal('success')
}

function request() {
  if (canOrder.value) {
    order()
    return
  }

  checkAvailability()
}
</script>

<style>
</style>