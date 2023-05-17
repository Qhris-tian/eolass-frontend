import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from '@/configs/request'

const useTransactionStore = defineStore('transactions', () => {
    const transactions = ref([])
    const transactionsPageInfo = ref({})

    function getTransactionData(type: string = "SALE") {
        axios.get(`/api/v1/transactions?type=${type}`).then(({ data }) => {
            transactions.value = data.response.data.B_transactions.edges
            transactionsPageInfo.value = data.response.data.B_transactions.pageInfo
            console.log(transactions.value)
        })
    }

    return { transactions, getTransactionData }
});

export { useTransactionStore }