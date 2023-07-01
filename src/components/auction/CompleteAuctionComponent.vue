<template>
  <div class="ml-[2rem] mt-10 mr-10 py-10 px-10">
    <div class="flex flex-col items-center">
      <div class="heading-lg mb-4 dark:text-white">Let's finish up!</div>
      <form class="bg-white min-w-[200px] sm:min-w-[450px] p-6 rounded shadow-sm dark:bg-[#2B2C37] dark:text-white">
        <p class="text-gray-400 dark:text-white text-xs mb-4">Please fill the form to continue</p>
        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Auction Type</label>
          <select
            v-model="auctionType"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
              focus:border-blue-500 block w-full p-2.5 dark:bg-[#2B2C37] dark:text-white dark:border-gray-700"
            required
          >
            <option :value="null" selected disabled>Selet an auction type</option>
            <option value="plain">Plain</option>
            <option value="preorder">Pre Order</option>
            <option value="declaredstock">Declared Stock</option>
          </select>
        </div>

        <div class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
          <div class="flex">
            <select v-model="currency" class="rounded-l-lg shadow w-20 text-sm p-2.5 dark:bg-[#2B2C37]">
              <option class="block px-4 py-2 hover:bg-gray-100">USD</option>
              <option class="block px-4 py-2 hover:bg-gray-100">EUR</option>
            </select>
            <input
              v-model.number="amount"
              type="number"
              class="block w-full text-sm text-gray-900 rounded-r-lg border-l-gray-100 border-l-2 p-2.5
                dark:bg-[#2B2C37] dark:border-gray-700 dark:text-white"
              placeholder="Enter price to auction product keys"
              min="0"
              required
            />
          </div>
        </div>

        <!-- <div v-if="auctionType === 'preorder'" class="mb-6">
          <label class="block mb-2 text-sm font-medium text-gray-900">On Hand</label>
          <input
            v-model="onHand"
            type="number"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Enter number of keys at hand"
            min="1"
            required
          />
        </div> -->
        <div class="mb-6" v-if="auctionType === 'declaredstock'">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Declared Stock</label>
          <input
            v-model="declaredStock"
            type="number"
            class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 
            focus:border-blue-500 block w-full p-2.5 dark:bg-[#2B2C37] dark:border-gray-700 dark:text-white"
            placeholder="Enter number of stocks"
            required
          />
        </div>
        <div class="flex items-start mb-6">
          <div class="flex items-center h-5">
            <input
              v-model="autoRenew"
              id="remember"
              type="checkbox"
              value=""
              class="w-4 h-4 border border-gray-300 rounded focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-white">Auto Renew</label>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineEmits, defineProps } from 'vue'
import type { CreateAuctionForm } from '@/interfaces/auction'

const props = defineProps<{
  title: String
  product: Object
  form: CreateAuctionForm
}>()

const emit = defineEmits(['update-form'])

const autoRenew = computed({
  get() {
    return props.form.autoRenew
  },
  set(newValue: boolean) {
    emit('update-form', { autoRenew: newValue })
  }
})

const auctionType = computed({
  get(): string | null {
    return props.form.type
  },
  set(newValue: string | null) {
    emit('update-form', { type: newValue })
  }
})

const amount = computed({
  get(): number | null {
    return props.form.price.amount
  },
  set(newValue: number | null) {
    console.log(newValue)

    emit('update-form', { price: { amount: newValue, currency: props.form.price.currency } })
  }
})

const currency = computed({
  get(): string {
    return props.form.price.currency
  },
  set(newValue: string) {
    console.log(newValue)

    emit('update-form', { price: { amount: props.form.price.amount, currency: newValue } })
  }
})

// const onHand = computed({
//   get() {
//     return props.form.onHand
//   },
//   set(newValue: string) {
//     emit('update-form', { onHand: newValue })
//   }
// })

const declaredStock = computed({
  get(): number | null {
    return props.form.declaredStock
  },
  set(newValue: number | null) {
    emit('update-form', { declaredStock: newValue })
  }
})
</script>

<style scoped></style>
