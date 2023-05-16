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
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { useTransactionStore } from '@/stores/transactions'
import { onMounted } from 'vue';

const transactionStore = useTransactionStore()

onMounted(() => transactionStore.getTransactionData())


</script>

<style scoped>
</style>