/**
 * 实现消息订阅的功能
 * 
 * PubSub对象
 * msg:消息的名字-------事件的名字
 * subscriber:回调函数
 * data:数据----发布消息的时候传递的数据
 * token:标识----唯一的
 * .subscribe(msg,subscriber)消息订阅的方法
 * .publish(msg,data)异步发布消息的方法
 * .publishSync(msg,data)同步发布消息的方法
 * .unsubscribe(token)取消消息订阅
 * 
 *  容器:{add:{id-0:f1,id-1:f2}} 
 * 
 * 
 * subscribe('add',f1)
 * subscribe('add',f2)
 * publish('add',data)
 */
(function (window) {
    // 定义消息的对象
    const PubSub = {};
    //定义一个存储消息名字及对应回调函数的大的容器---对象
    let subscriberContainer = {};
    // 定义标识
    let id = 0;
    // 订阅消息的方法
    PubSub.subscribe = function (msg, subscriber) {
        // 根据消息的名字获取对应的对象容器
        let subscribes = subscriberContainer[msg];
        // 判断该容器对象是否存在
        if (!subscribes) {
            subscribes = {};
            // 此时大的容器已经有了一对的数据(add就是键,subscribers就是对应的值)
            subscriberContainer[msg] = subscribes
        }
        // 创建标识
        const token = 'id-' + ++id;
        // 根据标识来存储对应的回调函数
        subscribes[token] = subscriber;
    };
    // 异步发布消息的方法
    PubSub.publish = function (msg, data) {
        // 根据消息名字获取对应的回调函数容器---对象
        let subscribes = subscriberContainer[msg];
        // 判断是否存在
        if (subscribes) {
            setTimeout(() => {
                Object.value(subscribes).forEach(subscribe => {
                    subscribe(data)
                });
            })
        }
    };
    // 同步发布消息的方法
    PubSub.publishSync = function (msg, data) {
        // 根据消息名字获取对应的回调函数容器---对象
        let subscribes = subscriberContainer[msg];
        // 判断是否存在
        if (subscribes) {
            Object.value(subscribes).forEach(subscribe => {
                subscribe(data)
            });
        }
    };
    // 取消消息订阅
    PubSub.unsubscribe = function (token) {
        // 判断是否传值
        if (token === undefined) {
            // 没传值就全部取消
            subscriberContainer = {};
        } else if (token.indexOf('id-') === 0 ) {
            // 传的是标识token
            let subscribes = Object.values(subscriberContainer).find(subscribes => {
                return subscribes[token]
            })
            subscribers && delete subscribers['id-1']
        } else {
            // 传的是消息的名字
            delete subscriberContainer[token]
            // 或者
            // subscriberContainer[token] = {}
        }
    };

    // 暴露给window
    window.PubSub = PubSub;
})(window)