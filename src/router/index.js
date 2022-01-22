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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// login handler
router.beforeEach((to, from, next) => {
  if (store.state.isLogin === false && to.path === "/") {
    next("/login")
  }
  else {
    next()

  }
})

export default router
