import { ref } from 'vue'
import { defineStore } from 'pinia'

const TESTING = false

export const useEnvironmentStore = defineStore('environment', () => {
  const environment = ref(TESTING)

  function toggle() {
    environment.value = !environment.value
  }

  return { environment, toggle }
})
