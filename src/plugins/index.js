/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import { router } from '@/routers'

export function registerPlugins (app) {
  app.use(router)
  app.use(vuetify)
}
