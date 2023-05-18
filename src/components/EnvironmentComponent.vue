<template>
    <div v-show="showEnvironmentToggle" class="environment">
        <label class="relative inline-flex items-center cursor-pointer">
            <input v-model="apiEnvironment" type="checkbox" value="" class="sr-only peer" />
            <div
                class="w-5 sm:w-11 h-3 sm:h-6 bg-gray-400 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0 sm:after:top-[2px] left-0  sm:after:left-[2px] after:bg-white after:border-gray after:border after:rounded-full after:h-3 after:w-3 sm:after:h-5 sm:after:w-5 after:transition-all peer-checked:bg-purple">
            </div>

            <span class="ml-3 heading-md text-gray-900">{{ apiEnvironment ? 'Live' : 'Test' }}</span>
        </label>
    </div>
</template>

<script setup lang="ts">

import { ref, watch } from 'vue';
import { useEnvironmentStore } from '@/stores/environment'

const environmentStore = useEnvironmentStore()
const apiEnvironment = ref(environmentStore.environment)
watch(apiEnvironment, () => environmentStore.toggle())

const showEnvironmentToggle = import.meta.env.VITE_TOGGLE_ENVIRONMENT === "true"

</script>

<style scoped></style>