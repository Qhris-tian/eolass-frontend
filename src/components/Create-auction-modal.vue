<template>

  <div v-if="isOpen" class="modal-mask fixed inset-0 bg-[rgba(0,0,0,0.6)] z-50 grid place-items-center">
    <div class="modal-container bg-white p-4 w-[80vw] max-w-[700px]">
        <header class="">
            <div class="flex justify-between font-medium">
                <div class="w-full flex justify-center text-center">
                    Create Auction<br>
                    {{ title }}
                </div>
                <div class="">
                    <img src="@/assets/close-icon.svg" @click="$emit('closeModal')" class="cursor-pointer" width="15" height="15" alt="">
                </div>
            </div>
        </header>
        <div class="font-medium text-sm pt-5">
            body
        </div>
        <!-- <footer>
            <button 
                @click="$emit('closeModal')"
                class="bg-[#E4EBFA] font-meduim text-sm py-3 px-5 rounded hover:border border-[#E4EBFA] text-[#828FA3]">
                close
            </button>
        </footer> -->
    </div>
  </div>

</template>

<script setup lang="ts">

defineProps({
    isOpen: Boolean,
    title: String
})

</script>

<style scoped>
</style>