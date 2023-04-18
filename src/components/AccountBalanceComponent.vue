<template>
  <div>
    <div class="flex items-center">
      <select v-model="currency" name="account-balance" class="mx-2 py-2 px-1 ring-2 ring-gray/40 hover:ring-purple/40 rounded-md">
        <option
          v-for="(value, index) in accountStore.currencies"
          :key="index"
          :value="value"
          v-text="value"
        ></option>
      </select>
      <p class="heading-xl">{{ accountStore.displayBalance }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useAccountStore } from '@/stores/account'

const currency = ref('EUR')
const accountStore = useAccountStore()
onMounted(() => accountStore.getAccountData())
watch(currency, (value) => accountStore.getCurrencyBalance(value))
</script>

<style scoped>
</style>