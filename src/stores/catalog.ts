import { ref } from 'vue'
import { defineStore } from 'pinia'
import catalogResponse from './json/catalog_response.json'

export const useCatalogStore = defineStore('catalog', () => {
  const catalog = ref({})

  // function to make api request for catalog api data.
  function getCatalogData() {    
    catalog.value = catalogResponse.results
  }

  return { catalog, getCatalogData }
})
