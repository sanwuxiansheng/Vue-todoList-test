<template>
  <ul>
    <li>ID:{{$route.params.id}}</li>
    <li>TITLE:{{detail.title}}</li>
    <li>CONTENT:{{detail.content}}</li>
  </ul>
</template>
<script>
  export default {
    data() {
      return {
        messageDetail: [{
            id: 1,
            title: "我怎么这么好看1~",
            content: "content001"
          },
          {
            id: 3,
            title: "我怎么这么好看3~",
            content: "content003"
          },
          {
            id: 5,
            title: "我怎么这么好看5~",
            content: "content005"
          }
        ],
        detail:{}
      }
    },
    // 界面显示后
    mounted () {
        // const id = this.$route.params.id;
        // this.detail = this.messageDetail.find(detail => detail.id === +id)
        this.showDetail(this.$route)
    },
    watch: {
        $route(val) {
            // const id = this.$route.params.id;
            // this.detail = this.messageDetail.find(detail => detail.id === +id)
            this.showDetail(val)
            // console.log(val);
            // val就是this.$route
        }
    },
    // 有重复使用代码可进行封装函数
    methods: {
        showDetail (val) {
            const id = val.params.id;
            this.detail = this.messageDetail.find(detail => detail.id === +id)
        }
    }
  }
</script>
<style scoped>
</style>