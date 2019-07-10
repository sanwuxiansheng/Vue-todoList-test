// 引入Vue
import Vue from 'vue'
// 引入App.vue
import App from './App';
// 引入需要使用的样式组件
import { Button } from 'mint-ui';
// 并声明
Vue.component(Button.name, Button);
// 实例化Vue对象
new Vue({
  // 选择器
  el: '#app',
  // 注册App组件
  components: { App },
  // 创建App模板
  template: '<App/>'
})
