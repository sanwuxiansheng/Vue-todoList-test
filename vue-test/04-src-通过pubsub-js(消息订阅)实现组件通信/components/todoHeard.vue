<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="todoName" @keyup.enter="add"/>
    </div>
</template>
<script>
export default {
    // props:{
    //     addTodo:{
    //         type:Function,
    //         required:true
    //     }
    // },
    data(){
        return {
            todoName:''
        }
    },
    methods:{
        
        add () {
            // trim去除两端空格
            // 先获取用户输入的数据
            const todoName =this.todoName.trim()
            if (todoName) {
                const todo={
                    id:Date.now(),
                    title:todoName,
                    isShow:false
                }
                // 将用户输入的数据添加到数组中
                this.$emit('addTodo', todo);
                // 清空输入框
                this.todoName=''
            };
            
        }
    }
}
</script>
<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>