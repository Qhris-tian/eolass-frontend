<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'

const props = defineProps<{
  name: string
}>()

const icon = ref({})

const entries: [string, any][] = Object.entries(import.meta.glob('@/assets/*.svg', { as: 'raw' }))

const icons = Object.fromEntries(
  entries.map(([key, value]) => {
    const filename = key.match(/\/([^/]+)\.svg$/)?.[1]
    return [filename, value]
  })
)

onBeforeMount(async () => {
  icon.value = props.name && (await icons?.[props.name]?.())
})
</script>

<template>
  <span v-if="props.name && typeof icon === 'string'" v-html="icon"></span>
</template>
