// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/public.css' /*引入公共样式*/
//vue-resource使用
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(Vuex)

// import Api from './api/index.js';  axios使用
// Vue.prototype.$api = Api;

Vue.use(ElementUI)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
