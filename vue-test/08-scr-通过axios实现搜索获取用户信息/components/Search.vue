<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="searchName" />
      <button @click="search">Search</button>
    </div>
  </section>
</template>
<script>
  export default {
    data () {
        return {
            searchName: ''
        }
    },
    methods: {
        search() {
            // 获取输入框输入的值----去掉空格
            const searchName = this.searchName.trim()
            // 分发事件
            this.$bus.$emit('search', searchName)
        }
    }
  }
</script>
<style scoped>
</style>