// 通过localStorage来保存数据和获取数据
export default {
    getTodos () {
        return JSON.parse(localStorage.getItem('todos_key') || '[]' )
    },
    setTodos (val) {
        localStorage.setItem('todos_key', JSON.stringify(val))
    }
}