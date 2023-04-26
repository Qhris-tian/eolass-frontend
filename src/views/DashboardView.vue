<template>
  <main>
    <Sidebar />
    <router-view v-slot="{ Component }">
      <transition mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
</template>

<script setup lang="ts">
import Sidebar from '@/components/SideBar.vue'
</script>