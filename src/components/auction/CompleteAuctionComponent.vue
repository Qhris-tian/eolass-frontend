<template>
  <div class="ml-[2rem] mt-10 mr-10  py-10 px-10">
    <div class="font-bold mb-2">
      Creating Auction for {{ props.product?.name }}
    </div>
    <CreateAuctionForm ref="CreateAuctionFormRef" :title="props.title"
      :product="props.product" :auctionKeys="props.auctionKeys" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose, defineProps } from 'vue';
import CreateAuctionForm from '../CreateAuctionForm.vue';

const CreateAuctionFormRef: any = ref(null)

const createAuction = () => {
  CreateAuctionFormRef.value.createAuction()
}

const props = defineProps({
  title: String,
  product: Object,
  auctionKeys: Array
})


defineExpose({
  createAuction
})

</script>

<style scoped>
</style>