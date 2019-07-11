<template>
  <div>
    <h2>About的</h2>
    <input type="text" v-model="searchName" placeholder="请输入您要搜索的内容">
    <button @click="search">Search</button>
    <h2 v-if="firstView">请输入搜索内容...</h2>
    <h2 v-else-if="loading">正在加载中....</h2>
    <h2 v-else-if="errorMsg">错误消息:{{errorMsg}}</h2>
    <div class="row" v-else>
      <div class="card" v-for="user in users" :key="user.id" style="float: left">
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style="width: 100px" />
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    data() {
      return {
        searchName: "",
        firstView: true, // 第一次展示页面的状态数据,true:显示该界面,false,不显示
        loading: false, // true,显示正在加载,false,不显示
        errorMsg: "", // 如果有数据,说明此事报错了,没有数据,没有报错
        users: []
      }
    },
    methods: {
      async search() {
        // 改变数据状态
        this.firstView = false;
        this.loading = true;
        try {
          // 通过axios发送请求获取数据
          const url = `https://api.github.com/search/users`;
          // 获取输入框输入的值----去掉空格
          const searchName = this.searchName.trim()
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
          this.loading = false;
          this.users = users;
        } catch (error) {
          this.loading = false;
          this.errorMsg = error.message;
        }
      }
    }
  }
</script>
<style scoped>
</style>