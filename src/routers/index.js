import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/Home.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/home', component: Home }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
