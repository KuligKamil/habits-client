<script setup lang="ts">
defineProps<{
  text: string
  label: string
  loading: boolean
}>()
const emit = defineEmits<(event: 'update:text', text: string) => void>()
</script>

<template>
  <v-text-field
    :model-value="text"
    :loading="loading"
    :label="label"
    prepend-inner-icon="mdi-magnify"
    single-line
    @update:model-value="emit('update:text', $event)"
  />
</template>
