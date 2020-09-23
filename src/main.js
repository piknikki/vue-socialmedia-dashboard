import Vue from 'vue'
import App from './App.vue'
// require('@/assets/main.sass')

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
