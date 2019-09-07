/* eslint-disable */
import Vue from 'vue';
import Router from 'vue-router';
import Index from './pages/Index';
import { JoinForm } from './pages/join';
import { Notice, NewsReport, NewsExternal } from './pages/news';
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
      path: '/join/form',
      name: 'joinForm',
      component: JoinForm,
    },
    {
      // 공지사항
      path: '/news/notice',
      name: 'notice',
      component: Notice,
    },
    {
      // 보도자료
      path: '/news/report',
      name: 'newsReport',
      component: NewsReport,
    },
    {
      // 외부공시
      path: '/news/external',
      name: 'newsExternal',
      component: NewsExternal,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
  ],
});
