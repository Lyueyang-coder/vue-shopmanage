import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//导入字体图标
import './assets/font/iconfont.css'
//导入全局样式表
import '../src/assets/css/global.css'
import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL='http://47.108.189.41:8889/api/private/v1/'
Vue.prototype.$http=axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
