<template>
  <transition name="auction-progress">
    <ol class="flex items-center w-full">
      <li
        class="flex w-full items-center text-purple after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block dark:after:border-purple-light"
        :class="props.step > 1 ? 'after:border-purple' : 'after:border-purple-light'"
      >
        <span
          class="flex items-center justify-center w-10 h-10 bg-purple rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0"
        >
          <svg-component :name="'key-chain'" class="text-white" />
        </span>
      </li>
      <li
        class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block dark:after:border-gray-700"
        :class="{
          'after:border-gray-200': props.step < 1,
          'after:border-purple-light': props.step > 1,
          'after:!border-purple': props.step > 2
        }"
      >
        <span
          class="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          :class="props.step > 1 ? 'bg-purple' : 'bg-purple-light'"
        >
          <svg-component
            :name="'package'"
            :class="props.step > 1 ? 'text-white' : 'text-gray-500'"
          />
        </span>
      </li>
      <li class="flex items-center w-full">
        <span
          class="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0"
          :class="{
            'bg-gray-200': props.step < 2,
            'bg-purple-light': props.step > 1,
            '!bg-purple': props.step > 2
          }"
        >
          <svg-component
            :name="'complete'"
            class="lg:w-6 lg:h-6"
            :class="props.step > 2 ? 'text-white' : 'text-gray-500'"
          />
        </span>
      </li>
    </ol>
  </transition>
</template>

<script setup lang="ts">
import SvgComponent from '../ui/SvgComponent.vue'
import { defineProps } from 'vue'
const props = defineProps<{
  step: number
}>()
</script>

<style scoped>
.auction-progress-enter-active,
.auction-progress-leave-active {
  transition: opacity 0.9s ease;
}

.auction-progress-enter-from,
.auction-progress-leave-to {
  opacity: 0;
}
</style>