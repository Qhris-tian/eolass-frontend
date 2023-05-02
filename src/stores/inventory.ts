import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/configs/request'
import type { Product } from '@/interfaces/inventory'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref<Array<Product>>([])

  function getInventoryData() {
    axios.get('/api/v1/inventory/').then(({ data }) => {
      inventory.value = data
    })
  }
  return { inventory, getInventoryData }
})
