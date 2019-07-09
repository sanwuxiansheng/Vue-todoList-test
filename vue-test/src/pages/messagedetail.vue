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
        messagedetail: [{
            id: 1,
            title: "message001",
            content: "content001"
          },
          {
            id: 3,
            title: "message003",
            content: "content003"
          },
          {
            id: 5,
            title: "message005",
            content: "content005"
          }
        ],
        detail: {}
      }
    },
    // 界面显示之后
    mounted() {
      this.showDetail(this.$route)
    },
    methods: {
      showDetail(val) {
        const id = val.params.id;
        this.detail = this.messagedetail.find(detail => detail.id === +id);
      }
    },
    watch: {
      $route(val) {
        this.showDetail(val);
      }
    },
  }
</script>
<style scoped>
</style>