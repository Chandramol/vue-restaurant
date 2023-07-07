// We are importing routing package
import { createWebHistory,createRouter} from "vue-router";
import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import AddRest from './components/AddRest.vue'
import Update from './components/Update.vue'
import pageNotFound from './components/NotFound.vue'

const routes=[
    {
        name:'Home',
        path:'/home',
        component:Home
    },
    {
        name:'SignUp',
        path:'/signup',
        component:SignUp
    },
    {
        name:'Login',
        path:'/login',
        component:Login
    },
    {
        name:'AddRest',
        path:'/add',
        component:AddRest
    },
    {
        name:'Update',
        path:'/update/:id',
        component:Update
    },
    {
        name:'pageNotFound',
        // This is universal path for showing error 404 '/:pathMatch(.*)*'
        path:'/:pathMatch(.*)*',
        component:pageNotFound
    }
]

const router=createRouter({
    history:createWebHistory(),
    routes
});

export default router;