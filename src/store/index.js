// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

//load Vuex
Vue.use(Vuex);

//to handle state
const state = {
posts: []
}

//to handle state
const getters = {}

//to handle actions
const actions = {

}

//to handle mutations
const mutations = {

}

//export store module
export default new Vuex.Store({
state,
getters,
actions,
mutations
})