import Vue from 'vue';
import Vuex from 'vuex';
// 声明使用
Vue.use(Vuex);
// 存储多个状态数据
const state = {
    count:0
};
// 存储多个可以直接修改状态数据的方法
const mutations = {// 一般情况,同步的操作的代码,都是放在mutations中
    // 每个函数都可以叫一个mutation
    INCREMENT(state) {
        state.count++
    },
    DECREMENT(state) {
        state.count--
    }
};
// 存储多个可以间接修改状态数据的方法
// 一般情况,异步的操作的代码,都是放在actions中
const actions = {
    increment(context) {
        context.commit('INCREMENT')
    },
    decrement(context) {
        context.commit('DECREMENT')
    },
    incrementIfOdd({commit,state}) {
        if (state.count % 2 !== 0) {
            commit('INCREMENT')
        }
    },
    incrementAsync({commit}) {
        setTimeout(() => {
            commit('INCREMENT')
        }, 1000);
    }
};
// 存储多个状态数据的计算属性中的getter操作的方法
const getters = {
    evenOrOdd(state) {
        return state.count % 2 === 0 ? '偶数' : '奇数'
    }
};
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})