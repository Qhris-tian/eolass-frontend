import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Catalog } from '@/interfaces/catalog'
import axios from '@/configs/request'

export const useCatalogStore = defineStore('catalog', () => {
  const catalog = ref<Catalog>({
    count: 0,
    next: '',
    previous: '',
    results: []
  })

  function getCatalogData() {
    return axios.get('/api/v1/catalogs/')
  }

  const setCatalogData = (data: Catalog) => (catalog.value = data)

  return { catalog, getCatalogData, setCatalogData }
})
