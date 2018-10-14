import Vue from 'vue'
import Router from 'vue-router'
import NotFound from './views/NotFound.vue'
import Home from './views/Home.vue'
import Team from './views/TeamPage.vue'
import TeamMember from './views/TeamMember.vue'
import About from './views/About.vue'
import Preview from './views/Preview.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/not-found',
      name: 'not-found',
      component: NotFound
    },
    {
      path: '/team',
      name: 'team',
      component: Team
    },
    {
      path: '/team/:uid',
      name: 'team-member',
      component: TeamMember
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/preview',
      name: 'preview',
      component: Preview
    },
    {
      path: '*',
      redirect: { name: 'not-found' }
    }
  ]
})
