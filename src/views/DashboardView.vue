<template>
  <main class="flex">
    <div class="w-2/12">
      <Sidebar />
    </div>
    <div class="w-10/12">
      <RouterView />
    </div>
  </main>
</template>

<script setup lang="ts">
import Sidebar from '@/components/Side-bar.vue'
</script>