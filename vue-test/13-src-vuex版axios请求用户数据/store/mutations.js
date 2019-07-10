// 包含直接改变状态数据状态的方法的对象
// 引入需要使用的常量
import { REQUESTING, REQ_SUCCESS, REQ_ERROR } from './mutation-type';
export default {
    // 请求的mutation
    [REQUESTING](state) {
        state.firstView = false; 
        state.loading = true;
    },
    // 请求成功的mutation
    [REQ_SUCCESS](state, users) {
        state.loading = false;
        state.users = users;
    },
    // 请求失败的mutation
    [REQ_ERROR](state, error) {
        state.loading = false;
        state.errorMsg = error;
    }
}