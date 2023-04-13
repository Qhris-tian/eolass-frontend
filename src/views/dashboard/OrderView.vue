<template>
    <div class="wrapper">
      <header class="absolute top-0 right-0 left-0 pl-[164px] py-[30px]">
        <div class="container flex justify-between items-center px-[108px] pt-[3px]">
          <div class="logo">
            <SvgComponent name="ezpin" class="block text-purple w-[100px]" />
          </div>
          <div class="environment">
            <label class="relative inline-flex items-center cursor-pointer">
              <input v-model="environment" type="checkbox" value="" class="sr-only peer" />
              <div
                class="w-11 h-6 bg-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple"
              ></div>
  
              <span class="ml-3 heading-md text-gray-900">{{
                environment ? 'Live' : 'Test'
              }}</span>
            </label>
          </div>
        </div>
      </header>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import SvgComponent from '@/components/ui/SvgComponent.vue'
  
  const environment = ref(false)
  </script>
  
  <style scoped>
  .wrapper {
    @apply p-4 ml-64;
  }
  </style>