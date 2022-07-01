

import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // template:`<h1>456</h1>`
  // 精简版，不带模板解析器，为了解析模板所以用render
  render: h => h(App), 
  
}).$mount('#app')
