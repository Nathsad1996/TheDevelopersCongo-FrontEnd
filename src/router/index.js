"use strict";

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from "../store/index"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/Login.vue')
  },
  {
    path: '/find-dev',
    name: 'findDev',
    component: () => import(/* webpackChunkName: "find-dev" */ '../views/FindDeveloper.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "profile" */ '../views/Profile.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// login handler
router.beforeEach((to, from, next) => {
  if (from.path === "/login" && to.path !== "/login") {
    store.dispatch('setWantToLogin', false)
    next()
  }
  else {
    next()
  }
})

export default router
