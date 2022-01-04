"use strict";

import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const state = {
  role: '',
  username: '',
  isLogin: false
}


const mutations = {
  SET_LOGIN: (state, value) => {
    state.isLogin = value.isLogin
    state.username = value.username
    state.role = value.role
  }
}

const actions = {
  setLogin : ({commit}, payload) => {
    // this function should set isLogin, role, username
    // payload is a json object {"role": "", "username": "", isLogin: true}
    commit('SET_LOGIN', payload)
  },
}


export default createStore({
  state: state,
  mutations: mutations,
  actions: actions,
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    }
    )
  ]
})
