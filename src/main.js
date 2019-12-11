import Vue from 'vue'
import App from './App.vue'
import  './assets/reset.css'
// import Distpicker from 'v-distpicker' // 地址联动插件
// Vue.component('v-distpicker',Distpicker) // 注册全局组件

import layer from  'vue-layer'
import 'vue-layer/lib/vue-layer.css'

import axios from 'axios'
Vue.prototype.$axios = axios;


Vue.prototype.$layer = layer(Vue);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
