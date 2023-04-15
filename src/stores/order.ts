import { ref } from 'vue'
import { defineStore } from 'pinia'
import orderResponse from './json/order_history_response.json'

export const useOrderStore = defineStore('order', () => {
    const orderHistory = ref({})

    // function to make api request for order history api data.
    function getOrderHistoryData() {    
      orderHistory.value = orderResponse
    }

  return { orderHistory, getOrderHistoryData }
})
