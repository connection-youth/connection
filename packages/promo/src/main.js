import Vue from 'vue';
import VueFullpage from 'fullpage-vue';

import App from './App.vue';
import router from './router';

import './style.scss';
import './fonts.scss';
import Youth from './youth';

// eslint-disable-next-line import/extensions
import 'reset-css';
import 'fullpage-vue/src/fullpage.css';

Vue.config.productionTip = false;

Vue.use(VueFullpage);
Vue.use(Youth);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
