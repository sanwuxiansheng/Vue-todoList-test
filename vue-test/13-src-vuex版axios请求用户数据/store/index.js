import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters.js';
import actions from './actions.js';
import mutations from './mutations';
import state from './state';
// 声明使用
Vue.use(Vuex);
export default new Vuex.Store({
    getters,
    actions,
    mutations,
    state
})