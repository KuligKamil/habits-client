<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router/auto'
import CardSummary from '@/components/CardSummary.vue'
import FiltersSelect from '@/components/FiltersSelect.vue'
import SearchBar from '@/components/SearchBar.vue'
import { useCountriesStore } from '@/stores/countries'

const router = useRouter()
const store = useCountriesStore()
const { fetchData, filterData } = store
const { loading, countries, filterText, filtersValue } = storeToRefs(store)
const onClick = (alpha3Code: string) => {
  router.push(`countries/${alpha3Code}`)
}
fetchData()
</script>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <SearchBar
            v-model:text="filterText"
            label="Search for a country..."
            :loading="loading"
          />
        </v-col>
        <v-col cols="6">
          <FiltersSelect
            label="Filter by Region"
            :items="filtersValue"
            @select:filter="filterData"
          />
        </v-col>
      </v-row>
      <v-row justify="center">
        <v-col cols="8">
          <div v-if="loading">
            <v-progress-circular
              indeterminate
              :size="100"
              :width="7"
            />
          </div>
          <div v-else>
            <CardSummary
              v-for="country in countries"
              :key="country.name"
              :alpha3-code="country.alpha3Code"
              :img="country.flags.svg"
              :title="country.name"
              :details="country.summary"
              @click:card="onClick(country.alpha3Code)"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
