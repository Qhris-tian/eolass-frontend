import { ref } from 'vue'
import { defineStore } from 'pinia'
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
  const orderHistoryLoaded = ref<boolean>(false)

  function getOrderHistoryData(offset: number = 1, limit = 10) {
    axios
      .get('/api/v1/orders/', {
        params: {
          limit,
          offset
        }
      })
      .then(({ data }) => {
        orderHistory.value = data
      })
      .finally(() => (orderHistoryLoaded.value = true))
  }

  const setOrderHistoryData = (data: OrderHistory) => (orderHistory.value = data)

  const cards = ref<Cards>({})
  function getOrderCards(reference: string) {
    if (typeof cards.value[reference] === 'undefined') {
      axios
        .get(`/api/v1/orders/${reference}/cards`)
        .then(({ data }) => (cards.value[reference] = data.results))
    }
  }

  return {
    orderHistory,
    cards,
    orderHistoryLoaded,
    getOrderHistoryData,
    getOrderCards,
    setOrderHistoryData
  }
})
