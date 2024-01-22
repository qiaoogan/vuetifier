/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import { router } from '@/routers'
import { pinia } from './pinia'

export function registerPlugins (app) {
  app.use(router)
  app.use(vuetify)
  app.use(pinia)
}
