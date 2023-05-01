import { ref } from 'vue'
import { defineStore } from 'pinia'
import orderHistoryResponse from './json/order_history_response.json'
import orderCardsResponse from './json/order_cards_response.json'
import type { OrderHistory } from '@/interfaces/orderHistory'
import type { Cards } from '@/interfaces/orderCard'
import axios from '@/configs/request'

export const useOrderStore = defineStore('order', () => {
  const orderHistory = ref<OrderHistory>({
    count: 0,
    next: null,
    previous: null,
    results: []
  })

  function getOrderHistoryData() {
    axios.get('/api/v1/orders/').then(({ data }) => {
      orderHistory.value = data
    })
    orderHistory.value = orderHistoryResponse
  }

  const cards = ref<Cards>({})
  function getOrderCards(reference: string) {
    if (typeof cards.value[reference] === 'undefined') {
      cards.value[reference] = orderCardsResponse.results
    }
  }

  return { orderHistory, cards, getOrderHistoryData, getOrderCards }
})
