<template>
  <Modal :content-class="'w-[350px] sm:w-[650px] dark:bg-[#2B2C37]'" @close-modal="emit('close-modal')">
    <template v-slot:header>
      <div class="flex justify-between items-start">
        <h1 class="text-lg mb-[24px] text-black dark:text-white capitalize">Auction Keys</h1>

        <div>
          <button type="button" class="w-[25px] dark:text-white" @click="emit('close-modal')">&times;</button>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <ol class="list-decimal">
        <li
          v-for="(key, index) in props.keys"
          :key="index"
          class="w-full text-gray-700 p-4 mt-2 bg-white hover:bg-gray-100 
          dark:bg-[#2B2C37] dark:text-white dark:hover:bg-gray-700"
        >
          {{ key }}
        </li>
      </ol>
    </template>
  </Modal>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'
import Modal from '@/components/BaseModal.vue'

const props = defineProps<{
  keys: Array<string>
}>()

const emit = defineEmits(['close-modal'])
</script>

<style scoped></style>
