import { defineClientConfig } from 'vuepress/client'
import Layout from './layouts/Layout.vue'


import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default defineClientConfig({
  enhance({ app }) {
    const vuetify = createVuetify({
      components,
      directives,
      icons: {
        defaultSet: 'mdi'
      },
    })
    app.use(vuetify)
  },
  layouts: {
    Layout,
  },
})