import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/configs/request'
import type { Product } from '@/interfaces/inventory'
import type { Result } from '@/interfaces/catalog'

export const useInventoryStore = defineStore('inventory', () => {
  const inventory = ref<Array<Product>>([])

  function getInventoryData() {
    axios.get('/api/v1/inventory/').then(({ data }) => {
      inventory.value = data
    })
  }

  function createInventory(product: Result) {
    return axios.post('/api/v1/inventory/', {
      sku: product.sku,
      title: product.title,
      region: product.regions[0]?.name
    })
  }
  return { inventory, getInventoryData, createInventory }
})
