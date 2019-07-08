<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <!-- :addTodo='addTodo'通过数据硬绑定来传输数据进行父子组件之间的通信 -->
      <todoHeard @addTodo='addTodo'/>
      <todoList :todos="todos" :deleteTodo="deleteTodo" />
      <todoFooder :todos="todos" :checkAllTodos="checkAllTodos">
        <label slot="left">
          <input type="checkbox" v-model="isCheck"/>
        </label>
        <span slot="center">
          <span>已完成{{cunt}}</span> / 全部{{todos.length}}
        </span>
        <button slot="right" class="btn btn-danger">清除已完成任务</button>
      </todoFooder>
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
// 引入pubsub-js
import PubSub from 'pubsub-js';
export default {
  name: 'App',
  // 注册组件
  components:{
    todoHeard,
    todoList,
    todoFooder
  },
  // 页面渲染后订阅消息
  mounted () {
    // 订阅消息实现删除操作
    var token = PubSub.subscribe('deleteTodo', ( index, data) => {
      this.deleteTodo(data)
    });
    // 通过事件总线绑定targetTodo事件
    // 绑定事件监听的方法
    this.$bus.$on('targetTodo', (todo) => {
      this.targetTodo(todo)
    })
  },
  // 计算属性
  computed:{
    cunt () {
      // 选中多少个就显示多少个
      return this.todos.reduce((pre, todo) => pre + (todo.isShow ? 1 : 0), 0)
    },
    // 选中的状态
    isCheck:{
      get () {
        //当前复选框是否选中,就看todos中有多少个todo及一共选中的个数和前面的todos.length是否一致
        return this.todos.length === this.cunt && this.cunt > 0
      },
      set (value) {
        //设置当前的选中状态,改变的是todos中所有的todo的isShow
        this.checkAllTodos(value)
      }
    }
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