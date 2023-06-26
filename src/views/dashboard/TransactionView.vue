<template>
    <div class="ml-[2rem] md:ml-[11rem] p-2 md:p-4 lg:p-8">
    <Navbar iconName="eneba" :showSearchBar="false" />
    <div class="mt-10">
      <h4 class="heading-xl uppercase dark:text-white">Transactions</h4>
    </div>
    <div>
      <div class="w-11/12 pt-5 flex justify-end">
        <!-- <router-link
          :to="{ name: 'transactions' }"
          class="bg-purple py-3 px-5 mb-5 rounded hover:border border-line text-white text-[12px] font-medium flex justify-center items-center"
        >
        <svg-component :name="'plus'" class="w-[24px] pr-2 text-white" />
          <span>Some Action</span>
        </router-link> -->
      </div>
      <TransactionTable />
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import TransactionTable from '@/components/TransactionTable.vue';
import SvgComponent from '@/components/ui/SvgComponent.vue';

</script>

<style scoped>
</style>