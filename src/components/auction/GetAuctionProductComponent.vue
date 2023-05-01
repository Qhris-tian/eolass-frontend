<template>
  <div class="ml-[2rem] mt-10 mr-10  py-10 px-10">
    <CreateAuctionStepTwo :product="props?.product" />
  </div>
</template>

<script setup lang="ts">
import CreateAuctionStepTwo from './CreateAuctionStepTwo.vue';
import { defineProps } from 'vue';

const props = defineProps<{
  product: string | null
}>()
</script>

<style scoped></style>