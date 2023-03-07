<script setup lang="ts">
import CardSummary from '@/components/CardSummary.vue'

const quizes = ['guessing from pl to es ', 'guessing from es to pl', 'writing from es to pl', 'writing from pl to es']
</script>

<template lang="pug">
span Quizes
//- CardSummary(title="Que es en espanol?")
CardSummary(v-for="quiz in quizes" :title="quiz")
</template>

<style lang="scss" scoped>
  
</style>
