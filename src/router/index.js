import Vue from 'vue'
import Router from 'vue-router'
import MyWorkspace from '../views/MyWorkspace.vue'
import Folder from '../views/Folder.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyWorkspace',
      component: MyWorkspace
    },
    {
      path: '/Folder/:id',
      name: 'Folder',
      component: Folder
    }
  ]
})
