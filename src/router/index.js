import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/trailers',
      component: () => import('../views/TrailerView.vue')
    },
    {
      path: '/azoren',
      component: () => import('../views/AzorenView.vue')
    },
    {
      path: '/balearen',
      component: () => import('../views/BalearenView.vue')
    },
    {
      path: '/baltische-staten',
      component: () => import('../views/BaltischeStatenView.vue')
    },
    {
      path: '/china',
      component: () => import('../views/ChinaView.vue')
    },
    {
      path: '/denemarken',
      component: () => import('../views/DenemarkenView.vue')
    },
    {
      path: '/ierland',
      component: () => import('../views/IerlandView.vue')
    },
    {
      path: '/ijsland',
      component: () => import('../views/IJslandView.vue')
    },
    {
      path: '/kreta-santorini',
      component: () => import('../views/KretaSantoriniView.vue')
    },
    {
      path: '/madeira',
      component: () => import('../views/MadeiraView.vue')
    },
    {
      path: '/nieuw-zeeland',
      component: () => import('../views/NieuwZeelandView.vue')
    },
    {
      path: '/noorwegen',
      component: () => import('../views/NoorwegenView.vue')
    },
    {
      path: '/portugal',
      component: () => import('../views/PortugalView.vue')
    },
    {
      path: '/roemenie',
      component: () => import('../views/RoemenieView.vue')
    },
    {
      path: '/slovenie',
      component: () => import('../views/SlovenieView.vue')
    },
    {
      path: '/suriname',
      component: () => import('../views/SurinameView.vue')
    },
    {
      path: '/taiwan',
      component: () => import('../views/TaiwanView.vue')
    },
  ]
})

export default router
