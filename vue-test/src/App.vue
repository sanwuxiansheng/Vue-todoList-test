<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- :addTodo='addTodo'通过数据硬绑定来传输数据进行父子组件之间的通信 -->
      <todoHeard :addTodo='addTodo'/>
      <todoList :todos="todos" :deleteTodo="deleteTodo" :targetTodo="targetTodo"/>
      <todoFooder :todos="todos" :checkAllTodos="checkAllTodos"/>
    </div>
  </div>
</template>
<script>
// 引入子组件
import todoHeard from './components/todoHeard';
import todoList from './components/todoLIst';
import todoFooder from './components/todoFooder';
// 引入自己组装的方法
import Storage from './utils/utils';
export default {
  name: 'App',
  // 注册组件
  components:{
    todoHeard,
    todoList,
    todoFooder
  },
  methods:{
    // 添加数据
    addTodo (todo) {
      this.todos.unshift(todo)
    },
    // 删除数据
    deleteTodo (index) {
      this.todos.splice(index,1)
    },
    // 修改todo.isShow的状态
    targetTodo (todo) {
      todo.isShow = !todo.isShow
    },
    // 子组件中如果修改了自己的复选框的选中状态,此时,父级组件这边的todos中每个todo的isShow全部要改变
    checkAllTodos (isCheck) {
      //把todos中所有的todo的isShow改变
      this.todos.forEach(todo => todo.isShow = isCheck )
    }

  },
  data () {
    return {
      // todos:[
      //   {id:1, title:'宝马', isShow:false},
      //   {id:2, title:'奥迪', isShow:true},
      //   {id:3, title:'奔驰', isShow:false},
      // ]
      todos: Storage.getTodos()
    }
  },
  // 监听数据的变化
  watch:{
    todos:{
      deep:true, // 深度监视
      handler:function (value) {
        Storage.setTodos(value)
      }
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