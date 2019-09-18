import Vue from 'vue';
import VueWindowSize from 'vue-window-size';
import * as VueGoogleMaps from 'vue2-google-maps';

import App from './App';
import router from './router';

import './scss/style.scss';
import './scss/fonts.scss';
import Youth from './youth';

// eslint-disable-next-line import/extensions
import 'reset-css';

Vue.config.productionTip = false;

Vue.use(VueWindowSize);
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
