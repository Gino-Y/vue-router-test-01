import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes:Array<RouteRecordRaw> = [
    {
        path:'/content',
        name:'Content',
        component:()=> import('../components/content.vue'),
        alias:['/root', '/gino', '/main', '/'],//别名
        redirect:{name:'Login'},//重定向
        children:[
            {
                path:'login',
                name:'Login',
                component:()=> import('../components/login.vue'),
                children:[
                    {
                        path:'user',
                        name:'User',
                        component:{
                            default:()=> import('../components/user-01.vue'),
                            user02:()=> import('../components/user-02.vue'),
                            user03:()=> import('../components/user-03.vue'),
                        }
                    }
                ]
            },
            {
                path:'reg',
                name:'Reg',
                component:()=> import('../components/reg.vue'),
                children:[
                    {
                        path:'user',
                        name:'User',
                        component:{
                            user04:()=> import('../components/user-04.vue'),
                            user05:()=> import('../components/user-05.vue'),
                        }
                    }
                ]
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router