import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import JobsView from '../views/jobs/JobsView.vue'
import JobsDetailView from '../views/jobs/JobsDetailView.vue'
import PageNotFound from '../views/PageNotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/jobs',
    name:'jobs',
    component: JobsView
  },
  {
    path:'/jobs/:id',
    name:'jobsdetail',
    component: JobsDetailView,
    props:true
  },
  {
    path:'/all-jobs',
    redirect:'/jobs'
  },
  {
    path: "/:catchAll(.*)",
    name: 'pagenotfound',
    component: PageNotFound,    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
