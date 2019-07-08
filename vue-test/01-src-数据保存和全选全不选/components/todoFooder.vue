<template>
<div class="todo-footer">
    <label>
        <input type="checkbox" v-model="isCheck"/>
    </label>
    <span>
        <span>已完成{{cunt}}</span> / 全部{{todos.length}}
    </span>
    <button class="btn btn-danger">清除已完成任务</button>
</div>
</template>
<script>
export default {
  props:{
    todos:{
      type:Array,
      required:true
    },
    checkAllTodos:{
      type:Function,
      required:true
    }
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
  }
}
</script>
<style scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>