<template>
<li :style="{backgroundColor:bgColor,color:fontClor}"
    @mouseenter="mouseMove(true)"
    @mouseleave="mouseMove(false)"
>
    <label>
        <input type="checkbox" v-model="isComputed"/>
        <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" v-show="isDisplay" @click="Delete">删除</button>
</li>
</template>
<script>
import PubSub from 'pubsub-js'
export default {
    // props用来接收父组件传给子组件的数据
    props:{
        todo:Object,
        deleteTodo:{
            type:Function,
            required:true
        },
        index:Number
    },
    computed:{
        isComputed:{
            get () {
                return this.todo.isShow
            },
            set () {
                // this.targetTodo(this.todo)
                this.$bus.$emit('targetTodo', this.todo)
            }
        }
    },
    data () {
        return {
            bgColor:'white',
            fontClor:'black',
            isDisplay: false
        }
    },
    methods:{
        // 鼠标移动事件
        mouseMove (flage) {
            // 如果传入的参数为true则说明是鼠标移入事件
            // 如果传入的参数是false则说明是鼠标移出事件
            if (flage) {
                this.bgColor='#ddd';
                this.fontClor='blue';
                this.isDisplay=true;
            } else {
                this.bgColor='white';
                this.fontClor='black';
                this.isDisplay=false;
            }
        },
        Delete () {
            if (confirm('您确认要删除吗')) {
                // 发布消息
                PubSub.publish('deleteTodo', this.index)
                // this.deleteTodo(this.index)
            }
        }
    }
}
</script>
<style scoped>
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>