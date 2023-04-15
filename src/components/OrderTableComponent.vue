<template>
  <div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500" aria-label="Order Table">
        <thead class="text-xs text-gray uppercase bg-white">
          <tr>
            <th scope="col" class="px-6 py-3">Product</th>
            <th scope="col" class="px-6 py-3 text-right">Total Cost</th>
            <th scope="col" class="px-6 py-3">Request Status</th>
            <th scope="col" class="px-6 py-3">Execution Status</th>
            <th scope="col" class="px-6 py-3">Date</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <template v-for="order in props.orderHistory" :key="order.reference_code">
            <tr class="bg-white border border-line">
              <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {{ order.product.title }}
              </td>
              <td class="capitalize px-6 py-4 text-right">{{ order.total_customer_cost }}</td>
              <td class="uppercase px-6 py-4">
                <span class="border p-3 rounded-md" :class="statusClass[order.status_text]">{{
                  order.status_text
                }}</span>
              </td>
              <td
                class="uppercase px-6 py-4"
                :class="order.is_completed ? 'text-green-400' : 'text-blue-400'"
              >
                {{ order.is_completed ? 'Complete' : 'In Progress' }}
              </td>
              <td class="capitalize px-6 py-4">{{ utils.formatDate(order.created_time, 'do MMM Y') }}</td>
              <td class="capitalize px-6 py-4 text-right">
                <div class="flex">
                  <button @click="toggleRowDetails(order.reference_code)">
                    <svg-component
                      v-show="detailsRow[order.reference_code]"
                      :name="'eye-off'"
                      class="text-purple"
                    />
                    <svg-component
                      v-show="!detailsRow[order.reference_code]"
                      :name="'eye'"
                      class="text-purple"
                    />
                  </button>
                </div>
              </td>
            </tr>
            <tr class="bg-line" v-if="detailsRow[order.reference_code]">
              <td class="px-6 py-4">
                <div class="flex flex-col">
                  <span>Face Value: {{ order.total_face_value }}</span>
                  <span>Discount: {{ order.total_discounts }}</span>
                </div>
              </td>
              <td class="text-left" colspan="5">
                <div class="flex flex-col">
                  <span class="mr-[10rem]">Total Fees: {{ order.total_fees }}</span>
                  <span class="mr-[10rem]">Share Link: {{ order.share_link }}</span>
                </div>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
    <nav class="flex items-center justify-between pt-4" aria-label="Order Table navigation">
      <span class="text-sm font-normal text-gray-500"
        >Showing <span class="font-semibold text-gray-900">1-10</span> of
        <span class="font-semibold text-gray-900">1000</span></span
      >
      <ul class="inline-flex items-center -space-x-px">
        <li class="mr-2">
          <button
            class="flex items-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <SvgComponent name="chevron-left" />
            <span>Previous</span>
          </button>
        </li>
        <li>
          <button
            class="flex items-center px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700"
          >
            <span>Next</span>
            <SvgComponent name="chevron-right" />
          </button>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup lang="ts">
import SvgComponent from './ui/SvgComponent.vue'
import { ref, defineProps } from 'vue'
import { useUtils } from '@/composables/utils'

const statusClass = {
  accept: 'text-green-400 border-green-400',
  rejected: 'text-red-800 border-red-300',
  pending: 'text-blue-400 border-blue-400'
}

const props = defineProps<{
  orderHistory: object
}>()

const detailsRow = ref({ id: false })
const toggleRowDetails = (key) => (detailsRow.value[key] = !detailsRow.value[key])

const utils = useUtils()

</script>

<style scoped>
</style>