import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import storage from './plugins/storage.js'

Vue.config.productionTip = false

Vue.use(storage, {
    storagePre: "KING"
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
