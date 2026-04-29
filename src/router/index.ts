import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'

const router = createRouter({
  history: createWebHashHistory('/overseas-sites/'),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/category/:id', name: 'category', component: Category },
  ],
})

export default router
