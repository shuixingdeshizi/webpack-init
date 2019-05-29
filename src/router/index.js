import VueRouter from 'vue-router'

import Home from '../views/home/home.vue'
import Rules from '../views/rules/rules.vue'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/rules',
      component: Rules
    }
  ]
})