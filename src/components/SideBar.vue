<template>
  <aside
    class="fixed top-0 left-0 z-40 w-15 sm:w-30 bg-white h-screen transition-transform sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div class="flex justify-center items-center flex-col pt-16 capitalize">
      <SvgComponent name="circle-user" class="block text-purple w-16 pb-4" />
      {{ KeyCloakService.getUserName() }}
    </div>
    <div class=" sm:pr-3 overflow-y-auto sm:pt-11 2xl:pt-24">
      <ul>
        <li class="sidebar-item heading-md">
          <router-link to="/catalog" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="layers" />
            <span class="hidden sm:block ml-3">Catalog</span>
          </router-link>
        </li>
        <li class="sidebar-item heading-md">
          <router-link to="/orders" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="cart" width="24" />
            <span class="hidden sm:block ml-3">Orders</span>
          </router-link>
        </li>
        <li class="sidebar-item heading-md">
          <router-link to="/products" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="inventory" />
            <span class="hidden sm:block ml-3">Inventory</span>
          </router-link>
        </li>
        <li class="sidebar-item heading-md">
          <router-link to="/auctions" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="auction" />
            <span class="hidden sm:block ml-3">Auctions</span>
          </router-link>
        </li>
        <li class="sidebar-item heading-md">
          <router-link to="/transactions" class="sidebar-link" active-class="sidebar-active">
            <SvgComponent name="credit-card" />
            <span class="hidden sm:block ml-3">Transactions</span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="absolute bottom-3 w-full flex justify-center">
    <button-component
      :label="'Logout'"
      :loading-label="'Logging Out'"
      :is-loading="isBusy"
      class="btn"
      @click="logout"
    /></div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ButtonComponent from './ui/ButtonComponent.vue'
import SvgComponent from './ui/SvgComponent.vue'
import KeyCloakService from '@/authentication/KeycloakService'

const isBusy = ref<boolean>(false)
const logout = () => {
  isBusy.value = true

  KeyCloakService.callLogOut()
}
</script>

<style scoped>
.sidebar-item {
  @apply my-6 text-purple;
}
.sidebar-active {
  @apply text-white bg-purple-light flex items-center p-2;
}
.sidebar-link {
  @apply flex items-center transition duration-75 rounded-r-3xl pr-2 sm:pr-6 py-2 left-0 pl-3;
}
.sidebar-link:hover {
  @apply bg-purple-light/10;
}
.sidebar-link:active,
.sidebar-link:focus {
  @apply bg-purple-light;
}
</style>
