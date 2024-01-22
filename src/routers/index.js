import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'
import Home from '@/components/Home.vue'
import Profile from '@/components/Profile.vue'
import Update from '@/components/Update.vue'
import About from '@/components/About.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/home',
    component: Home,
    children: [
      {
        path: 'profile',
        component: Profile,
      },
      {
        path: 'update',
        component: Update,
      },
      {
        path: 'about',
        component: About,
      },
    ]
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
