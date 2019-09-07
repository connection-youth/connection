import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index';
import Notice from './pages/Notice';
import Contact from './pages/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
    },
    {
      path: '/about',
      name: 'about',
    },
    {
      path: '/join',
      name: 'join',
    },
    {
      path: '/news/notice',
      name: 'notice',
      component: Notice,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
