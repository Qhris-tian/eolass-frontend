<template>
  <div class="wrapper">
    <header class="absolute top-0 right-0 left-0 pl-[164px] py-[30px]">
      <div class="container flex justify-around items-center">
        <div class="logo">
          <SvgComponent name="ezpin" class="block text-purple w-[100px]" />
        </div>
        <div>
          <form class="w-[600px]" @submit.prevent="search">
            <div class="flex items-center bg-purple-light rounded-full shadow-sm">
              <SvgComponent name="search" class="text-white w-7 absolute ml-5" />

              <div class="w-[600px] border border-purple/40 rounded-full">
                <input
                  type="text"
                  aria-label="Search catalog"
                  placeholder="Search catalog"
                  autocomplete="off"
                  class="flex bg-transparent min-h-[70px] w-[100%] placeholder:text-white indent-[55px] heading-xl text-white border-0 focus:outline-none relative z-10"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="environment">
          <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="apiEnvironment" type="checkbox" value="" class="sr-only peer" />
            <div
              class="w-11 h-6 bg-gray peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple"
            ></div>

            <span class="ml-3 heading-md text-gray-900">{{
              apiEnvironment ? 'Live' : 'Test'
            }}</span>
          </label>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'
import { useEnvironmentStore } from '@/stores/environment'

const counter = useEnvironmentStore()

const apiEnvironment = ref(counter.environment)

watch(apiEnvironment, () => counter.toggle())

function search() {
  console.log('searching...')
}
</script>

<style scoped>
.wrapper {
  @apply p-4 ml-64;
}
</style>