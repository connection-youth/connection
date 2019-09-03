import Vue from 'vue';
import VueFullpage from 'fullpage-vue';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App';
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
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDwbNn_NgDq5X_LNPEIrKQ2UAwLT52FTO4',
    libraries: 'places',
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
