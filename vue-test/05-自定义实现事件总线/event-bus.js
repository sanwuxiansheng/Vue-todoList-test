/* 自己实现事件总线的绑定和分发及解绑
 * 
 * 实现绑定:事件类型,回调函数
 * $bus.$on('事件类型',回调函数)及$off()及$emit()功能
 * 事件类型click---事件名字click
 * 
 * 事件总线的对象
 * 容器:{add:[f1,f2,f3,f4],del:[f1,f2,f3]}
 * 绑定事件的方法
 * .on(eventName,listener)
 * 分发事件的方法
 * .emit(eventName,data)
 * 
 * 解绑事件的方法
 * .off(eventName)
 * .on('add',function(){})
 * .on('add',function(){})
 * 
 * .emit('add') 
 */
(function (window) {
    // 事件总线对象
    const EventBus = {};
    // 用来存储所有的事件及对应的函数的容器对象
    let listenerContainer = {};
    // 绑定事件 eventName-->事件名称， listener-->回调函数
    EventBus.on = function (eventName, listener) {
        // 根据事件的名字去大的容器中,有没有对应的存储回调函数的数组容器
        let listeners = listenerContainer[eventName]
        // 当容器中没有该事件时
        if (!listeners) {
            // 创建一个空的数组容器用来存储回调函数
            listeners = []
            // 根据事件名字及对应的数组容器以键值对的方式存储到大的容器中
            listenerContainer[eventName] = listeners
        }
        // 把传进来的回调函数存储到数组的容器中
        listeners.push(listener)
    };
    // 分发事件
    EventBus.emit = function (eventName, data) {
        // 根据事件的名字获取对应的存储回调函数的数组
        let listeners = listenerContainer[eventName]
        // 判断该数组是否存在
        if (listeners && listeners.length > 0) {
            listeners.forEach(listener => {
                listener(data)
            });
        }
    };
    // 解绑事件
    EventBus.off = function (eventName) {
        // 判断有没有传值
        if (eventName === undefined) {
            // 没有传值就全部清空
            listenerContainer = {}
        } else {
            // 传了值就清楚对应的数据
            listenerContainer[eventName] = []
            // 或者
            // delete listenerContainer[eventName]
        }
    }
    // 暴露给window
    window.EventBus = EventBus;
})(window)