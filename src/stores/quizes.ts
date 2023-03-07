import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { RootObject } from './models'
import { useFetch } from '@/composables/fetch'

export const useCountriesStore = defineStore('countries', () => {
  const { execute: fetchData, data: allCountries, loading } = useFetch({
    url: 'countries',
    mapResponse: (countries: RootObject[]) => countries.map(
      ({ name, region, subregion, capital, population, languages, alpha3Code, flags, ...rest }) =>
        ({
          name,
          region,
          flags,
          alpha3Code,
          ...rest,
          searchText: [region, capital, subregion, ...languages, name]
            .join('').replaceAll(' ', '').replaceAll('-', '').replaceAll('.', '').replaceAll(',', '').toLowerCase(),
          summary: new Map<string, string | undefined>([
            ['Population', population.toString()],
            ['Region', region],
            ['Capital', capital],
          ]),
        })),
  })
  const filtersValue = ref(['Europe', 'Africa', 'Americas', 'Asia', 'Oceania'])
  const filterText = ref<string>('')
  const filterSelected = ref<string>('')
  const countries = computed(() => allCountries.value?.filter(country =>
    (!filterSelected.value || country.region === filterSelected.value)
    && (!filterText.value || country.searchText.includes(filterText.value.toLowerCase())),
  ))

  function filterData(filter: string) {
    filterSelected.value = filter
  }
  return { countries, fetchData, loading, filterData, filterText, filterSelected, filtersValue }
})
