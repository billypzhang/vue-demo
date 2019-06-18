// 引入第三方包开始
import Vue from 'vue'
import App from '@/App'
// 引入第三方包结束

// 路由配置文件
import router from '@/router'

// mint
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

// mui
import '@/static/vendor/mui/dist/css/mui.css'

// 引入全局样式
import '@/static/css/global.css'

// mockjs
require('@/mock.js')
// axios
import Axios from 'axios'

// 安装
Vue.use(Mint)
Vue.prototype.$ajax = Axios

Vue.config.productionTip = false

// 定义全局过滤器
import Moment from 'moment';
Vue.filter('covertDate',function(value){
  return Moment(value).format("YYYY-MM-DD")
})

//VuePreview:引入vue-preview(注意版本用法)
import VuePreview from 'vue-preview'
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: {top: 0, bottom: 0},
  captionEl: false,
  fullscreenEl: false,
  shareEl: false,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})


// 引入全局组件
import NavBar from '@/components/common/navBar.vue'
Vue.component('navBar',NavBar)

// 创建vue实例
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
