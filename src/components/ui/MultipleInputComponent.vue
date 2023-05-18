<template>
  <div class="flex flex-wrap w-full p-2 items-center border rounded">
    <div v-for="(item, index) in items" :key="index" class="w-full md:w-1/2 p-1">
      <div class="bg-purple-light rounded text-white flex justify-between p-1">
        <span>{{ item }}</span>
        <img
          src="@/assets/close-icon.svg"
          @click="emit('removeProductKey', index)"
          class="cursor-pointer hover:w-[15px] filter invert transition-all"
          width="10"
          height="10"
          alt="Close Icon"
        />
      </div>
    </div>
    <input
      v-model="multiInput"
      type="text"
      class="w-full md:w-1/2 text-sm border-line"
      placeholder="Enter key"
      @input="emit('updateNewItem', multiInput)"
      @keyup.enter="addkey()"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref } from 'vue'

const emit = defineEmits(['updateNewItem', 'addProductKey', 'removeProductKey'])

defineProps({
  newItem: String,
  items: Array
})

const multiInput = ref()

function addkey() {
  emit('addProductKey')
  multiInput.value = null
}
</script>

<style scoped>
</style>