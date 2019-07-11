// 引入Vue
import Vue from 'vue';
// 引入路由对象
import VueRouter from 'vue-router';
// 引入路由
import routes from './routes';
// 声明使用插件
Vue.use(VueRouter)
// 挂载到VueRouter实例对象上
export default new VueRouter({
    mode:'history',
    routes
})