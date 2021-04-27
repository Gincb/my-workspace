// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  token: {}
}

//to handle state
const getters = {}

const actions = {
  getToken({ commit }) {
    axios.post('https://api.platform.sandbox.easytranslate.com/oauth/token', 
    {
      client_id: 'bfd59cd6-001c-410b-98a6-9dc5436fbb22',
      client_secret: 'mLKI6WyRJ7pKOeq7jzxvt5Ad8UBkeY2ofpJzxIwA',
      grant_type: 'password',
      username: 'developer+sbk@easytranslate.com',
      password: 'easytranslate2020',
      scope: 'dashboard'
    })
    .then(response => {
      console.log(response)
      commit('SET_TOKEN', response.data)
    }), 
    (error) => {
      console.log(error)
    }
  }
}
  
//to handle mutations
const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})