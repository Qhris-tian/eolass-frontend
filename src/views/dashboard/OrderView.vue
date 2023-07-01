<template>
  <div class="md:p-4 lg:p-8 md:ml-[7rem] p-2">
    <header class="container relative flex justify-between items-center mb-3 sm:mb-8 px-2 md:px-14">
      <div class="logo">
        <SvgComponent name="ezpin" class="block text-purple w-[50px] sm:w-[100px] md:w-[80px]" />
      </div>

      <environment-component />
    </header>

    <div class="px-2 md:px-14">
      <div class="heading-xl mb-3 sm:mb-8 uppercase dark:text-white">Orders</div>
      <div id="table">
        <order-table-component :order-history="orderStore.orderHistory"> </order-table-component>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { onMounted } from 'vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'
import OrderTableComponent from '@/components/OrderTableComponent.vue'
import EnvironmentComponent from '@/components/EnvironmentComponent.vue'
import { useOrderStore } from '@/stores/order'


const orderStore = useOrderStore()
onMounted(() => orderStore.getOrderHistoryData())
</script>
  
<style scoped></style>