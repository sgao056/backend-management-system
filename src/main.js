import Vue from 'vue'
import router from '../router/router.js'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index.js'
import http from 'axios';
import '../api/mock'
import { VuePlugin } from 'vuera'
import './less/index.less'

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.use(ElementUI)
Vue.use(VuePlugin)

router.beforeEach((to,from,next)=>{
  store.commit('getToken')
  const token = store.state.user.token
  if(!token && to.name!=='login'){
    next({name:'login'})
  }else{
    next()
  }
})

new Vue({
  store,
  router,
  render: h => h(App),
  created(){
    store.commit('addMenu',router)
  }
}).$mount('#app')
