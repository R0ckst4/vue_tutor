import Main from "@/pages/Main";
import {createRouter} from "vue-router";
import {createWebHistory} from "vue-router";
import PostPages from "@/pages/PostPages";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";



const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPages
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },


]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;