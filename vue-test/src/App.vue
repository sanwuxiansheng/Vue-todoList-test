<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <todoHeard/>
      <todoList :todos="todos"/>
      <todoFooder/>
    </div>
  </div>
</template>
<script>
// 引入子组件
import todoHeard from './components/todoHeard';
import todoList from './components/todoLIst';
import todoFooder from './components/todoFooder'
export default {
  name: 'App',
  components:{
    todoHeard,
    todoList,
    todoFooder
  },
  data () {
    return {
      todos:[
        {id:1, title:'宝马', isShow:false},
        {id:2, title:'奥迪', isShow:false},
        {id:3, title:'奔驰', isShow:false},
      ]
    }
  }
}
</script>
<style scoped>
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>