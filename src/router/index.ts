import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/releases/:id',
      name: 'release infomation',
      component: () => import('../views/ReleaseDetailView.vue')
    },
    {
      path: '/releases',
      name: 'releases',
      component: () => import('../views/ReleasesView.vue')
    },
    {
      path: '/project',
      name: 'project',
      component: () => import('../views/ProjectView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsListView.vue')
    },
    {
      path: '/news/:id',
      name: 'news detail',
      component: () => import('../views/NewsDetailView.vue')
    },
    {
      path: '/blackhole',
      name: 'blackhole',
      component: () => import('../views/BlackholeView.vue')
    }
  ]
})

export default router
