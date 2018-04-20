import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test'
import find from '@/components/find'
import home from '@/components/home'
import shopping from '@/components/shopping'
import mine from '@/components/mine'
import shopintrduce from '@/components/shopintrduce'
import beshopheader from '@/components/beshopheader'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'test',
      component:test
    },
    {
        path:'/home',
        name:'home',
        component:home
    },
    {
        path:'/find',
        name:'find',
        component:find
    },
    {
        path:'/mine',
        name:'mine',
        component:mine
    },
    {
        path:'/shopping',
        name:'shopping',
        component:shopping
    },
    {
        path:'/shopintrduce',
        name:'shopintrduce',
        component:shopintrduce
    },
    {
        path:'/beshopheader',
        name:'beshopheader',
        component:beshopheader
    }
    
    
  ]
})