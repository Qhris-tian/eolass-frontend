<template>
  <div class="ml-[2rem] md:ml-[12rem p-2 md:p-4 lg:p-8">
    <Navbar iconName="eneba" :showSearchBar="false" />
    <div class="mt-10">
      <h4 class="heading-xl uppercase">Settings</h4>
    </div>
    <div class="mt-10">
      <ul class="font-bold">
        <li class="mr-2">
          <a
            href="#"
            aria-current="page"
            class="inline-block p-2 bg-white rounded-t-lg active w-[120px]"
          >
            Account
          </a>
        </li>
      </ul>

      <div class="p-3 pt-20 bg-white">
        <div class="flex flex-wrap">
          <div class="md:w-[40%] w-[100%]">
            <div class="flex justify-between w-[70%] md:w-[100%] items-center">
              <div class="flex items-center">
                <span class="">Spending Limit</span>
                <svg-component :name="'info-circle'" class="w-[30px] pl-2 text-[#635FC7]" />
              </div>
              <div class="flex justify-end items-center">
                <svg-component :name="'plus-box'" class="w-[24px] pr-2 text-[#635FC7]" />
              </div>
            </div>
            <div class="w-[100%] mt-5 flex justify-between">
              <div class="w-[45%]">
                <label for="interval" class="block mb-1 text-sm">Interval</label>
                <select
                  id="interval"
                  class="w-full border px-4 pr-8 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                >
                  <option value="one">one</option>
                </select>
              </div>
              <div class="w-[45%]">
                <label for="limit" class="block mb-1 text-sm pr-4">Percentage Limit(%)</label>
                <input
                  id="limit"
                  required
                  class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                  type="text"
                  placeholder="Enter percentage limit"
                />
              </div>
            </div>
          </div>
          <div class="md:w-[50%] w-[100%] md:pl-10 pt-10 md:pt-0">
            <div class="flex w-[100%] items-center">
              <span>Action Percentage Price</span>
              <svg-component :name="'info-circle'" class="w-[30px] pl-2 text-[#635FC7]" />
            </div>
            <div class="w-[100%] mt-5 flex justify-between">
              <div class="w-[45%] md:pt-6">
                <input
                  id="limit"
                  required
                  class="w-full border px-4 py-2 rounded focus:border-blue-500 focus:shadow-outline outline-none"
                  type="text"
                  placeholder="Enter percentage price"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end mx-8 sm:mx-16">
          <button-component class="!px-8" type="button" :label="'Save'" @click="saveSetting" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/NavBar.vue'
import SvgComponent from '@/components/ui/SvgComponent.vue'
import ButtonComponent from '@/components/ui/ButtonComponent.vue'

function saveSetting() {
  console.log('saving...')
}
</script>

<style scoped></style>
