<template>
  <h2 v-if="!repUrl">正在加载中....</h2>
  <div v-else>
    <h2>
      most star is
      <a :href="repUrl">{{repName}}</a>
    </h2>
  </div>
</template>
<script>
export default {
  data () {
    return {
      repUrl: '', // 存储的就是Vue对应的链接地址
      repName: '' // 存储的是获取到的Vue的值
    }
  },
  // 页面显示后立刻发送请求,获取数据
  mounted () {
    const url = `https://api.github.com/search/repositories?q=v&sort=stars`;
    this.$http
      .get(url)
      .then(response => {
        const result = response.data.items[0];
        // 获取数据后更新数据
        this.repUrl = result.html_url;
        this.repName = result.name;
      })
      .catch(error => {
        console.log('报错：'+ error);
      })
  }
}
</script>
<style scoped>
</style>