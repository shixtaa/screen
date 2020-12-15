import Vue from 'vue'
import ViewUI from 'view-design';
import ElementUI from 'element-ui';
import router from './router'
import App from './App.vue'

import './assets/style/reset.scss'
import 'view-design/dist/styles/iview.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ViewUI);
Vue.use(ElementUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
