import {createRouter, createWebHistory} from 'vue-router'
import LoginView from '../views/LoginView.vue'
import QuestionView from "@/views/QuestionView.vue";
import SuccessComponent from "@/views/SuccessComponent.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: LoginView
        },
        {
            path: '/question',
            name: 'question',
            component: QuestionView
        },
        {
            path: '/success',
            name: 'success',
            component: SuccessComponent
        }
    ]

})

export default router
