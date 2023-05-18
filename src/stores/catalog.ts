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
    axios.get('/api/v1/catalogs/').then(({ data }) => {
      catalog.value = data
    })
  }

  return { catalog, getCatalogData }
})
