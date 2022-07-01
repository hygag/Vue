


import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//全局混合 在main.js里调用Vue.mixin方法添加
// import {a,b} from './mixin'
// Vue.mixin(a)
// Vue.mixin(b)

new Vue({
  render: h => h(App),
  
}).$mount('#app')
