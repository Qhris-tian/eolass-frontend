import { ref } from 'vue'
import { defineStore } from 'pinia'
import catalogResponse from './json/catalog_response.json'
import type { Catalog } from '@/interfaces/catalog'

export const useCatalogStore = defineStore('catalog', () => {
  const catalog = ref<Catalog>({results: []})

  // function to make api request for catalog api data.
  function getCatalogData() {    
    catalog.value = catalogResponse
  }

  return { catalog, getCatalogData }
})
