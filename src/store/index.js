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
    state.isLogin = value
  }
}

const actions = {
  setLogin : ({commit}, payload) => {
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
