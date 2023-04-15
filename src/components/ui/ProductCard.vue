<template>
    <div class="w-4/12 md:w-1/5 h-[384px] mb-2 pr-2 pb-10">
        <div class="shadow h-full">
            <div class="h-3/5" :class="`bg-[url('${imageUrl}')] bg-cover bg-no-repeat bg-center`">
            </div>
            <div class="h-2/5">
                <div class="h-[70%] p-1 font-medium text-sm">
                    {{ name }}
                    <br>Global
                    <br>EUR 50.00 - EUR 60.00
                </div>
                <div class="flex justify-center p-1">
                    <button class="bg-[#635FC7] py-2 px-7 rounded hover:border border-[#E4EBFA] text-white text-[12px] font-medium flex justify-center items-center">
                        <span>Auction</span>
                    </button>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{
    imageUrl: string,
    name: string
}>()

</script>

<style scoped>
</style>