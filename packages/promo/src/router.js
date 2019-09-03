import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index.vue';
import Notice from './pages/Notice.vue';
import Contact from './pages/Contact.vue';

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
      name: 'news',
      component: Notice,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
