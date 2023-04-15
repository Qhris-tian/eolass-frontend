<template>
   <div>
        <Navbar iconName="eneba" />
        <div class="mt-10">
            <header>
               <span>Products</span>
            </header>
        </div>
        <div class="flex flex-wrap">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
   </div>
</template>

<script setup lang="ts">
import Navbar from '@/components/Nav-bar.vue'
import ProductCard from '@/components/ui/ProductCard.vue';
</script>

<style scoped>

</style>