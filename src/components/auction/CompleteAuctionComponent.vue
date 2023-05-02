<template>
  <div class="ml-[2rem] mt-10 mr-10  py-10 px-10">
    <CreateAuctionForm ref="CreateAuctionFormRef" :title="props.title"
      :product="props.product" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineExpose, defineProps, onMounted } from 'vue';
import CreateAuctionForm from '../CreateAuctionForm.vue';

const CreateAuctionFormRef: any = ref(null)

const createAuction = () => {
  CreateAuctionFormRef.value.createAuction()
}

const props = defineProps({
  title: String,
  product: Object
})


defineExpose({
  createAuction
})

</script>

<style scoped>
</style>