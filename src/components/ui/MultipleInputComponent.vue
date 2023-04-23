<template>

    <div class="flex flex-wrap w-full p-2 items-center border rounded">
        <div v-for="(item, index) in items" :key="index" class="w-1/3 p-1">
            <div class="bg-[#A8A4FF] rounded text-white flex justify-between p-1">
                <span class="">{{ item }}</span>
                <img src="@/assets/close-icon.svg" @click="$emit('removeProductKey', index)" class="cursor-pointer hover:w-[15px] filter invert transition-all" width="10" height="10" alt="">
            </div>
        </div>
        <input type="text" class="w-1/3 text-sm border-none" placeholder="enter key" v-bind:value="newItem" @input="$emit('updateNewItem', ($event.target as HTMLButtonElement)?.value)" @keyup.enter="$emit('addProductKey')">
    </div>

</template>

<script setup lang="ts">

defineProps({
    newItem:String,
    items:Array
})

</script>

<style scoped>
</style>