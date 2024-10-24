import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './components/HomeView.vue'
import AboutView from './components/AboutView.vue'
import TechView from './components/TechView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/tech', component: TechView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router