import Vue from 'vue';
import App from './App.vue';
import router from './router';

import './fonts.scss';
import Youth from './youth';

// eslint-disable-next-line import/extensions
import 'reset-css';

Vue.config.productionTip = false;
Vue.use(Youth);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
