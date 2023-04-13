<script setup lang="ts">
import { ref, onMounted } from 'vue'

const props = defineProps<{
  name: string
}>()

const icon = ref({})

const icons = Object.fromEntries(
  Object.entries(import.meta.glob('@/assets/*.svg', { as: 'raw' })).map(([key, value]) => {
    const filename = key.split('/').pop()!.split('.').shift()
    return [filename, value]
  })
)

onMounted(async () => {
  icon.value = props.name && (await icons?.[props.name]?.())
})
</script>

<template>
  <span v-if="props.name" v-html="icon"></span>
</template>
