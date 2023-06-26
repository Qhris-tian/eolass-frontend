<template>
  <main>
    <Sidebar />
    <router-view v-slot="{ Component }">
      <transition mode="out-in" >
        <component :is="Component" class="ml-[50px] sm:ml-[200px] min-h-screen dark:bg-[#20212C]" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import Sidebar from '@/components/SideBar.vue'
</script>