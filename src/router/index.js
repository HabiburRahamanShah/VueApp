import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentModule from '@/components/ComponentModule'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ComponentModule',
      component: ComponentModule
    },
    {
      path: '/page2',
      name: 'HelloWorld',
      component: HelloWorld
  }
  ]
})
