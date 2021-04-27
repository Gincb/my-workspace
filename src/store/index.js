// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'
import Cookies from 'js-cookie'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
  token: Cookies.get('tokenType') + ' ' + Cookies.get('accessToken'),
  status: '',
  folders: {},
  singleProjects: {}
}

//to handle state
const getters = {
  success: state => !!state.token,
  authStatus: state => state.status,
  allFolders: (state) => state.folders
}

const actions = {
  getToken() {
    return new Promise((resolve, reject) => {
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
        const tokenType = response.data.token_type
        const accessToken =  response.data.access_token
        Cookies.set('tokenType', tokenType)
        Cookies.set('accessToken', accessToken)
        axios.defaults.headers.common['Authorization'] = Cookies.get('tokenType') + ' ' + Cookies.get('accessToken')
        resolve(response)
      })
      .catch(err => {
        console.log(err)
        reject(err)
      })
    })
  },

  getFolders({ commit }) {
    commit('auth_request')
    axios.get('https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/folders',
    {
      Authorization: Cookies.get('tokenType') + ' ' + Cookies.get('accessToken')
    })
    .then(response => {
      commit('SET_FOLDERS', response.data.data)
      commit('auth_success')
    }), 
    (error) => {
      commit('auth_error')
      console.log(error)
    }
  },

  getSingleProjects({ commit }) {
    axios.get('https://api.platform.sandbox.easytranslate.com/api/v1/teams/developer-account/projects?filters[is_workspace]=true',
    {
      Authorization: Cookies.get('tokenType') + ' ' + Cookies.get('accessToken')
    })
    .then(response => {
      commit('SET_SINGLE_PROJECTS', response.data.data)
    }), 
    (error) => {
      console.log(error)
    }
  }
}
  
//to handle mutations
const mutations = {
  auth_request(state){
    state.status = 'loading'
  },
  auth_success(state){
    state.status = 'success'
  },
  auth_error(state){
    state.status = 'error'
  },
  SET_FOLDERS(state, folders) {
    state.folders = folders
  },
  SET_SINGLE_PROJECTS(state, singleProjects) {
    state.singleProjects = singleProjects
  }
}

//export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})