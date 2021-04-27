import Vue from 'vue'
import Router from 'vue-router'
import MyWorkspace from './../views/MyWorkspace.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyWorkspace',
      component: MyWorkspace
    }
  ]
})
