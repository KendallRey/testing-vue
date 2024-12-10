import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
// import colors from 'vuetify/util/colors'

import './index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia()
const vuetify = createVuetify({
  // theme: {
  //   themes: {
  //     light: {
  //       dark: false,
  //       colors: {
  //         primary: colors.blue.base,
  //         secondary: colors.teal.base
  //       }
  //     },
  //     dark: {
  //       dark: true,
  //       colors: {
  //         primary: colors.blue.base,
  //         secondary: colors.teal.base
  //       }
  //     }
  //   }
  // },
  components,
  directives,
})

app.use(pinia)
app.use(vuetify)
app.use(router)

app.mount('#app')
