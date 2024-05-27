// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const defaults = {
  VAppBar: {
    elevation: 0,
  },
  VBtn: {
    variant: "flat",
    height: 38,
    // rounded: "lg",
    size: "small",
  },
  VTextField: {
    color: "primary",
    variant: "outlined",
    density: "comfortable",
  },
}

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    defaults
    // ... your configuration
  })
  app.vueApp.use(vuetify)
})