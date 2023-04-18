<template>

    <div class="flex flex-wrap w-full p-2 items-center border rounded">
        <div v-for="(item, index) in items" :key="index" class="w-1/3 p-1">
            <div class="bg-[#A8A4FF] rounded text-white flex justify-between p-1">
                <span class="">{{ item }}</span>
                <span class="cursor-pointer" @click="$emit('removeProductKey', index)">X</span>
            </div>
        </div>
        <input type="text" class="w-1/3 text-sm border-none" placeholder="enter key" v-bind:value="newItem" @input="$emit('updateNewItem', $event.target.value)" @keyup.enter="$emit('addProductKey')">
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