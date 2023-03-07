<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  items: string[]
  label: string
}>()
const emit = defineEmits<(event: 'select:filter', selected: string) => void>()
const selected = ref()
</script>

<template>
  <v-select
    v-model="selected"
    clearable
    :label="label"
    :items="items"
    @update:model-value="emit('select:filter', selected)"
  />
</template>
