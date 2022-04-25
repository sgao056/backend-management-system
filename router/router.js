import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../view/home.vue'
import user from '../view/user.vue'
import products from '../view/products.vue'
import page1 from '../view/page2.vue'
import page2 from '../view/page1.vue'
import login from '../view/login.vue'
const routes = [
   {
       path:'/',
       name:'Main',
       component:()=>import('../view/Main.vue'),
       children:[
        {
            path:"/home",
            name:"home",
            component: home
        },
        {
            path:"/user",
            name:"user",
            component:user
        },
        {
            path:"/products",
            name:"products",
            component:products
        },
        {
            path:"others",
            name:"others",
            children:[
                {
                path:"/page1",
                name:"page1",
                component:page1
                },
                {
                    path:"/page2",
                    name:"page2",
                    component:page2
                }
            ]
        }
    ]
   },
   {
    path:'/login',
    name:'login',
    component:login
    }
]

Vue.use(VueRouter)

const router = new VueRouter({
    mode:"history",
    routes:routes
})

export default router