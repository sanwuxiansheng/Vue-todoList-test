// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App'
// 引入VueResource
import VueResource from 'vue-resource';
Vue.use(VueResource);
// 实例化Vue对象
new Vue({
  // 选择器
  el: '#app',
  // 注册App组件
  components: { App },
  // 创建App模板
  template: '<App/>'
})
