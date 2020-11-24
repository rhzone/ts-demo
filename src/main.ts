import Vue from 'vue'
import { Button } from '@digitalgd/gmd-ui'
// import '@digitalgd/gmd-ui/dist/gmd.css'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.component(Button.name, Button)
new Vue({
  router,
  store,
  render: h => h(App),
  created() {
    console.log(Button);
  }
}).$mount('#app')
