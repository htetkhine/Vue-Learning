import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateProject from '../views/CreateProjects.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    props:true
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    props:true
  },
  {
    path: '/createProject',
    name: 'createProject',
    component: CreateProject,
    // props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
