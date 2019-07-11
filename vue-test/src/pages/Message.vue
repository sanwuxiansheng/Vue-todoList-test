<template>
  <div>
    <ul>
      <li v-for="m in message" :key="m.id">
        <router-link replace :to="`/home/message/detail/${m.id}`">{{m.title}}</router-link>
        <!-- replace这里传这个值可以将push改为replace -->
        ---<button @click="pushShow(m.id)">push查看</button>
        ---<button @click="replaceShow(m.id)">replace查看</button>
      </li>
    </ul>
    <button @click="$router.back()">返回</button>
    <!-- router-view标签才能让路由组件进行使用 -->
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
      data () {
          return {
              message:[]
          }
      },
      // 页面加载后
      mounted () {
          setTimeout(() => {
              this.message = [
                  { id: 1, title: "我怎么这么好看1~"},
                  { id: 3, title: "我怎么这么好看3~"},
                  { id: 5, title: "我怎么这么好看5~"}
              ]
          }, 1000);
      },
      methods: {
          pushShow (id) {
              this.$router.push(`/home/message/detail/${id}`)
            //   console.log(id);
              // push保存历史纪录
          },
          replaceShow (id) {
              this.$router.replace(`/home/message/detail/${id}`)
            //   console.log(id);
              // replace不保存历史纪录
          }
      }
  }
</script>
<style scoped>
</style>