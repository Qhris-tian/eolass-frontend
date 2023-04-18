import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'
import accountResponse from './json/balance_response.json'

export const useAccountStore = defineStore('account', () => {
  const balance = ref([])
  const currencies = ref([])
  const displayBalance = ref(0.0)

  function getCurrencyBalance(currency: string = 'EUR'): number {
    const foundBalance = balance.value.find((balanceItem) => balanceItem.currency.code === currency)
    displayBalance.value = foundBalance ? foundBalance.balance : 0.0

    return displayBalance.value
  }

  // function to make api request to balance api data.
  function getAccountData() {
    balance.value = accountResponse
    currencies.value = accountResponse.map((balanceItem) => balanceItem.currency.code)
    getCurrencyBalance()
  }

  return { displayBalance, balance, currencies, getAccountData, getCurrencyBalance }
})
