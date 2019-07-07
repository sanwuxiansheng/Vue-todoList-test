<template>
<li :style="{backgroundColor:bgColor,color:fontClor}"
    @mouseenter="mouseMove(true)"
    @mouseleave="mouseMove(false)"
>
    <label>
        <input type="checkbox" v-model="todo.isShow"/>
        <span>{{todo.title}}</span>
    </label>
    <button class="btn btn-danger" style="display:none" v-show="isDisplay">删除</button>
</li>
</template>
<script>
export default {
    props:{
        todo:Object
    },
    data () {
        return {
            bgColor:'white',
            fontClor:'black',
            isDisplay:false
        }
    },
    methods:{
        mouseMove (flage) {
            // 如果传入的参数为true则说明是鼠标移入事件
            // 如果传入的参数是false则说明是鼠标移出事件
            if (flage) {
                this.bgColor='#ddd',
                this.fontClor='blue',
                this.isDisplay=true
            } else {
                this.bgColor='white',
                this.fontClor='black',
                this.isDisplay=false
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
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>