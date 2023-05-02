<template>
  <div class="md:p-4 md:ml-[7rem] p-2">
    <header class="container relative flex justify-between items-center mb-3 sm:mb-8 px-2 sm:px-[5rem]">
      <div class="logo">
        <SvgComponent name="ezpin" class="block text-purple w-[50px] sm:w-[100px] md:w-[80px]" />
      </div>

      <div class="environment">
        <label class="relative inline-flex items-center cursor-pointer">
          <input v-model="apiEnvironment" type="checkbox" value="" class="sr-only peer" />
          <div
            class="w-5 sm:w-11 h-3 sm:h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 sm:after:top-[2px] left-0  sm:after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-3 after:w-3 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-purple">
          </div>

          <span class="ml-3 heading-md text-gray-900">{{ apiEnvironment ? 'Live' : 'Test' }}</span>
        </label>
      </div>
    </header>

    <div class="px-2 sm:px-[5rem]">
      <div class="heading-xl mb-3 sm:mb-8 uppercase">Orders</div>
      <div id="table">
        <order-table-component :order-history="orderStore.orderHistory"> </order-table-component>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ref, watch, onMounted } from 'vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'
import { useEnvironmentStore } from '@/stores/environment'
import OrderTableComponent from '@/components/OrderTableComponent.vue'
import { useOrderStore } from '@/stores/order'

const environmentStore = useEnvironmentStore()
const apiEnvironment = ref(environmentStore.environment)
watch(apiEnvironment, () => environmentStore.toggle())

const orderStore = useOrderStore()
onMounted(() => orderStore.getOrderHistoryData())
</script>
  
<style scoped></style>