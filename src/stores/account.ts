import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Balance } from '@/interfaces/balance'
import accountResponse from './json/balance_response.json'
import axios from '@/configs/request'

export const useAccountStore = defineStore('account', () => {
  const balance = ref<Array<Balance>>([])
  const currencies = ref<Array<String>>([])
  const displayBalance = ref(0.0)

  function getCurrencyBalance(currency: string = 'EUR'): number {
    const foundBalance = balance.value.find((balanceItem) => balanceItem.currency.code === currency)
    displayBalance.value = foundBalance ? foundBalance.balance : 0.0

    return displayBalance.value
  }

  // function to make api request to balance api data.
  function getAccountData() {
    axios.get('/api/v1/account/balance').then(({ data }) => {
      balance.value = data.balance
      currencies.value = accountResponse.map((balanceItem) => balanceItem.currency.code)
      getCurrencyBalance()
    })
  }

  return { displayBalance, balance, currencies, getAccountData, getCurrencyBalance }
})
