// 包含间接改变数据状态的方法的对象 也存放异步操作
// 引入需要用到的常量
import {
  REQUESTING,
  REQ_ERROR,
  REQ_SUCCESS
} from './mutation-type';
// 引入axios
import axios from 'axios';
export default {
  async search({commit}, searchName) {
    // 修改当前数据状态
    commit(REQUESTING);
    try {
      // 通过axios发送请求获取数据
      const url = `https://api.github.com/search/users`;
      const response = await axios.get(url, {
        params: {
          q: searchName
        }
      });
      // 将获取到的数据显示出来
      const result = response.data.items;
      // 遍历数据
      const users = result.map((item) => {
        return {
          login: item.login,
          html_url: item.html_url,
          avatar_url: item.avatar_url
        }
      });
      // 更新数据状态
      commit(REQ_SUCCESS, users)
    } catch (error) {
      commit(REQ_ERROR)
    }

  }
}