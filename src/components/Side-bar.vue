<template>
  <aside
    class="fixed top-0 left-0 z-40 w-30 bg-white h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="h-full pr-3 py-4 overflow-y-auto mt-12">
      <ul class="space-y-2">
        <div class="flex text-gray pl-1 my-6">
          <span class="heading-sm uppercase">Ezpin</span>
          <hr  class="w-full relative top-[11px]" />
        </div>
        <li class="sidebar-item">
          <router-link to="catalog" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="layers" />
            <span class="ml-3">Catalog</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link to="orders" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="cart" width="24" />
            <span class="ml-3">Orders</span>
          </router-link>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2">
        <div class="flex text-gray pl-1 my-6">
          <span class="heading-sm uppercase">Eneba</span>
          <hr  class="w-full relative top-[11px]" />
        </div>
        <li class="sidebar-item">
          <router-link to="products" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="package" />
            <span class="ml-3">Products</span>
          </router-link>
        </li>
        <li class="sidebar-item">
          <router-link to="auctions" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="auction" />
            <span class="ml-3">Auctions</span>
          </router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import SvgComponent from './ui/SvgComponent.vue'
</script>

<style scoped>
.sidebar-item {
  @apply heading-md my-6 text-purple;
}
.sidebar-active {
  @apply text-white bg-purple-light flex items-center p-2;
}
.sidebar-link {
  @apply flex transition duration-75 rounded-r-3xl pr-6 py-2 left-0 pl-3;
}
.sidebar-link:hover {
  @apply bg-purple-light/10;
}
.sidebar-link:active,
.sidebar-link:focus {
  @apply bg-purple-light;
}
</style>