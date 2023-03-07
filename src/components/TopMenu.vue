<script setup lang="ts">
defineProps<{
  title: string
  mode: string
}>()
</script>

<template lang="pug">
v-toolbar
  v-toolbar-title {{ title }}
  v-spacer
  v-btn 🌑 ☀️ {{  mode }} mode
</template>
