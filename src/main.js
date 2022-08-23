import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import axios from "axios"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import {Container} from 'element-ui';
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Container);

// 配置axios
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
