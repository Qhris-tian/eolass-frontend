<template>
    <div class="relative overflow-x-auto shadow-md w-11/12">
        <table class="w-full text-[12px] text-center text-gray-500 dark:text-gray-400" aria-label="Auction Table">
            <thead class="text-gray-700 dark:text-gray-400 bg-white">
                <tr class="border-b border-[#ccc]">
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        Code
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Amount
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Status
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Order Number
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3 border-r border-[#ccc]">
                        <div class="flex items-center">
                            Date
                        </div>
                    </th>
                    <th scope="col" class="px-6 py-3">
                        <div class="flex items-center">
                            Actions
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <template v-if="transactionStore.transactions?.length == 0">
                    <div class="text-center p-2">
                        No transactions available
                    </div>
                </template>
                <template v-else v-for="(transaction, index) in transactionStore.transactions" :key="index">
                    <tr class="bg-white border-b border-[#ccc]">
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ transaction['node']['code'] }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ transaction['node']['money']['amount'] }} ({{ transaction['node']['money']['currency'] }})
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ transaction['node']['status'] }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ transaction['node']['orderNumber'] }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ getFormattedDate(transaction['node']['createdAt']) }}
                        </td>
                        <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Actions
                        </td>
                    </tr>
                </template>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useTransactionStore } from '@/stores/transactions'
import { onMounted } from 'vue';

const transactionStore = useTransactionStore()

onMounted(() => transactionStore.getTransactionData())

function getFormattedDate(date: string) {
    const d = new Date(date)
    return d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear();
}

</script>

<style scoped>
</style>