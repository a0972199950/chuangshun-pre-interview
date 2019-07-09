import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuelidate from "vuelidate";

import 'bootstrap/dist/css/bootstrap.css'

import axios from "axios";
axios.defaults.baseURL = "https://demo.api-platform.com";

Vue.use(vuelidate);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
