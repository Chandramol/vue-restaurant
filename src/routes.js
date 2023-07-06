// We are importing routing package
import { createWebHistory,createRouter } from "vue-router";
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'

const routes=[
    {
        name:'Home',
        path:'/home',
        component:Home
    },
    {
        nmae:'SignUo',
        path:'/signup',
        component:SignUp
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;