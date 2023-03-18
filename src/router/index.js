import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// eslint-disable-next-line no-unused-vars
import RepoView from '../views/RepoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/repositories',
      name: 'repositories',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/RepoView.vue')
    },
    {
      path: '/repositories/:id',
      name: 'single-repo',
      component: () => import('../views/SingleRepo.vue')
    },
    {
      path:'/:pathMatch(.*)*',
      name:'404',
      component: () => import ('../views/NotFound.vue')
    }
    
  ]
})

export default router
