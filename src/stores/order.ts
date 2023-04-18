import { ref } from 'vue'
import { defineStore } from 'pinia'
import orderResponse from './json/order_history_response.json'
import orderCardsResponse from './json/order_cards_response.json'

export const useOrderStore = defineStore('order', () => {
  const orderHistory = ref({})
  function getOrderHistoryData() {
    // function to make api request for order history api data.
    orderHistory.value = orderResponse
  }

  const cards = ref({})
  function getOrderCards(reference: string) {
    if (typeof (cards.value[reference]) === 'undefined') {      
      cards.value[reference] = orderCardsResponse.results
    }
  }

  return { orderHistory, cards, getOrderHistoryData, getOrderCards }
})
