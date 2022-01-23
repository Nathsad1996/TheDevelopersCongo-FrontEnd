"use strict";

import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const state = {
  role: '',
  username: '',
  isLogin: false,
  wantToLogin: false
}


const mutations = {
  SET_LOGIN: (state, value) => {
    state.isLogin = value
  },
  SET_WANT_TO_LOGIN: (state, value) => {
    state.wantToLogin = value
  }
}

const actions = {
  setLogin : ({commit}, payload) => {
    commit('SET_LOGIN', payload)
  },
  setWantToLogin: ({commit}, payload) => {
    commit('SET_WANT_TO_LOGIN', payload)
  }
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
