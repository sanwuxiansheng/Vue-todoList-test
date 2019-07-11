// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App.vue'

// 引入路由器
import router from './router';
// 实例化Vue对象
new Vue({
  // 选择器
  el: '#app',
  // 注册App组件
  components: { App },
  // 创建App模板
  template: '<App/>',
  router  // 挂载路由器-----在组件中,都可以使用this.$router对象
})
