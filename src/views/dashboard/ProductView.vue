<template>
  <div class="md:p-4 md:ml-[7rem] p-2">
    <div class="px-2 md:px-14">
      <h4 class="heading-xl uppercase mb-4">Inventory</h4>
      <inventory-table />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import InventoryTable from '@/components/InventoryTable.vue'
import { useInventoryStore } from '@/stores/inventory'

const inventoryStore = useInventoryStore()
onMounted(() => inventoryStore.getInventoryData())

</script>

<style scoped></style>