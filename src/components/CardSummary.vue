<script setup lang="ts">
defineProps<{
  alpha3Code: string
  img: string
  title: string
  details: Map<string, string | undefined>
}>()

const emit = defineEmits<(event: 'click:card') => void>()
</script>

<template>
  <v-card class="mb-4" variant="tonal" @click="emit('click:card')">
    <v-img :src="img" />
    <v-card-title class="font-weight-bold">
      {{ title }}
    </v-card-title>
    <v-card-text>
      <div v-for="[key, value] of details" :key="key">
        <div v-if="value">
          <span class="font-weight-bold">{{ key }}:</span> {{ value }}
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
