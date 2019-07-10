// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App.vue'
// 引入建好的仓库
import store from './store'
// 实例化Vue对象
new Vue({
  // 选择器
  el: '#app',
  // 注册App组件
  components: { App },
  // 创建App模板
  template: '<App/>',
  store
})
