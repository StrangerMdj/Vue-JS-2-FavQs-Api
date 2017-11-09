import Vue from 'vue'
import Router from 'vue-router'
import QuoteDay from '@/components/QuoteDay'
import Quotes from '@/components/Quotes' 

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'QuoteDay',
      component: QuoteDay
    },
    {
      path: '/quotes',
      name: 'Quotes',
      component: Quotes
    }
  ]
})
