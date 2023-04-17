<template>

    <div class="flex flex-wrap w-full p-2 items-center border rounded">
        <div v-for="(item, index) in items" :key="index" class="w-1/3 p-1">
            <div class="bg-[#A8A4FF] rounded text-white flex justify-between p-1">
                <span class="">{{ item }}</span>
                <span class="cursor-pointer" @click="removeItem(index)">X</span>
            </div>
        </div>
        <input type="text" class="w-1/3 text-sm border-none" placeholder="enter key" v-model="newItem" @keyup.enter="addItem">
    </div>

</template>

<script setup lang="ts">
import { reactive } from 'vue';

let newItem = '';
let items:String[] = reactive([]);

function addItem() {
    if (newItem.trim() !== '') {
        items.push(newItem.trim())
        newItem = ''
    }
    console.log(items);
}

function removeItem(index) {
    items.splice(index, 1)
}

</script>

<style scoped>
</style>