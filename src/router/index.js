import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Index from '@/components/index'
import Content1 from '@/components/Content1'
import Content2 from '@/components/Content2-distributing'
import Content3 from '@/components/Content3-my'
import Content4 from '@/components/Content4-dis-detail'
import Content5 from '@/components/Content5-my-set'
import Content6 from '@/components/Content6-my-whole'
import Content7 from '@/components/Content-rob'
import Content8 from '@/components/Content-rob'
import Content9 from '@/components/Content-dis'
import Content10 from '@/components/Content-dis'
import Resetpass from '@/components/Resetpass'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        { path: 'content1',
         component: Content1,
         children:[
          { path: 'content7',component: Content7},
          { path: 'content8',component: Content8},
        ]
       },
        { path: 'content2', component: Content2,
        children:[
          { path: 'content9',component: Content9},
          { path: 'content10',component: Content10},
        ]
      },
        { path: 'content3', component: Content3 },
        { path: 'content4', component: Content4 },
        { path: 'content5', component: Content5 },
        { path: 'content6', component: Content6 },
      ]
    },
    {
      path: '/resetpass',
      name: 'Resetpass',
      component: Resetpass
    },
  ]
})
