import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Contact from './views/Contact.vue'
import News from './views/News.vue'
import People from './views/People.vue'
import Publication from './views/Publication.vue'
import Research from './views/Research.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: 'people',
      name: 'people',
      component: People
    }, {
      path: 'news',
      name: 'news',
      component: News
    }, {
      path: 'research',
      name: 'research',
      component: Research
    }, {
      path: 'publication',
      name: 'publication',
      component: Publication
    }, {
      path: 'contact',
      name: 'contact',
      component: Contact
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
