import { createPinia } from 'pinia'
import { createApp } from 'vue'
import { router } from './router/router'
import App from './App.vue'
import { vuetify } from './vuetify'

createApp(App).use(createPinia()).use(vuetify).use(router).mount('#app')
