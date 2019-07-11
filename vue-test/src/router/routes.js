// 引入各个路由组件
import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Message from '../pages/Message.vue';
import New from '../pages/New.vue';
import MessageDetail from '../pages/messageDetail.vue';
export default [
    // 配置路由中的路径
    {
        path:'/about',
        component:About
    },
    {
        path:'/home',
        component:Home,
        children:[
            {
                path:'/home/message',
                component:Message,
                children:[
                    {
                        path:'/home/message/detail/:id',
                        component:MessageDetail
                    }
                ]
            },
            {
                path:'/home/news',
                component:New
            },
            {
                // 重定向
                path:'',
                redirect:'/home/news'
            }
        ]
    },
    {
        // 重定向
        path:'',
        redirect:'/about'
    }
]