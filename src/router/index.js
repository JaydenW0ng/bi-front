import Vue from 'vue'
import VueRouter from 'vue-router'

//导入组件
import HomeView from '../views/HomeView.vue'

import Dataset  from '../views/Dataset/DsHome.vue'
import DatasetAsideTree from '../views/Dataset/DatasetAsideTree.vue'
import DsNavMenu from '../views/Dataset/DsNavMenu.vue'
import DsDetail from '../views/Dataset/DsDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataset/dsmenu',
    name: 'Dataset',
    component: Dataset,
    children:[
      {path: '/views/Dataset/DatasetAsideTree', component: DatasetAsideTree},
      {path: '/views/Dataset/DsNavMenu', component: DsNavMenu},
    ]
  },
  {
    path: '/test',
    name: 'test',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dataset/Main.vue')
  },
  {
    path: '/dataset/detail',
    name: 'detail',
    component: DsDetail
  },
]

const router = new VueRouter({
  routes
})

export default router
