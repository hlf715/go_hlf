import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/public.css' /*引入公共样式*/
import './assets/eleui.css' /*引入需要修改的elementui样式*/
import VCharts from 'v-charts'
import VueResource from 'vue-resource'//vue-resource使用

Vue.use(VueResource)
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VCharts)
// import Api from './api/index.js';  axios使用
// Vue.prototype.$api = Api;


Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   //NProgress.start();
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
