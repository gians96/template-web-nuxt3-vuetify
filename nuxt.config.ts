// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/main.scss"],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      apiURL: process.env.apiURL,
      token_apiperu: process.env.token_apiperu
    }
  },
  app: {
    pageTransition: {
      name: "page",
      mode: "out-in" // default
    },
    layoutTransition: {
      name: "layout",
      mode: "out-in" // default
    },
  },
  modules: [
    '@pinia/nuxt',
    "nuxt-pdfmake",
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})
