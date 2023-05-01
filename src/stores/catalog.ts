import { ref } from 'vue'
import { defineStore } from 'pinia'
import catalogResponse from './json/catalog_response.json'
import type { Catalog } from '@/interfaces/catalog'
import axios from '@/configs/request'

export const useCatalogStore = defineStore('catalog', () => {
  const catalog = ref<Catalog>({
    count: 0,
    next: '',
    previous: '',
    results: []
  })

  // function to make api request for catalog api data.
  function getCatalogData() {
    axios.get('/api/v1/catalogs/').then(({ data }) => {
      console.log(data, catalogResponse)

      catalog.value = data
    })
  }

  return { catalog, getCatalogData }
})
