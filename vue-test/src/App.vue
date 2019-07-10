<template>
  <div>
    <!-- <h2>当前的值{{$store.state.count}},当前的数字是:{{$store.getters.evenOrOdd}}</h2> -->
    <!-- 简化版 -->
    <h2>当前的值{{count}},当前的数字是:{{evenOrOdd}}</h2>
    <button @click="increment">加的操作+</button>
    <button @click="decrement">减的操作-</button>
    <button @click="incrementIfOdd">奇数的时候相加+</button>
    <button @click="incrementAsync">异步的相加+</button>
  </div>
</template>
<script>
  import { mapActions, mapGetters, mapState, mapMutations } from 'vuex'
  export default {
    // methods: {
    //   increment () {
    //     // 显示提交----向mutations中
    //     this.$store.commit('INCREMENT')
    //   },
    //   decrement () {
    //     // 显示提交----向mutations中
    //     this.$store.commit('DECREMENT')
    //   },
    //   incrementIfOdd () {
    //     // 隐式提交----向actions中
    //     this.$store.dispatch('incrementIfOdd')
    //   },
    //   incrementAsync () {
    //     // 隐式提交----向actions中
    //     this.$store.dispatch('incrementAsync')
    //   }
    // }
    // 简化版
    computed: {
      ...mapState(['count']),
      ...mapGetters(['evenOrOdd'])
    },
    methods: {
      ...mapMutations({
        increment: 'INCREMENT',
        decrement: 'DECREMENT'
      }),
      ...mapActions(
        ['incrementAsync',
        'incrementIfOdd']
      )
    }
  }
</script>
<style scoped>
</style>