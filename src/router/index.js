import { createRouter, createWebHistory } from 'vue-router'
import RegisterPage from "@/pages/RegisterPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'регистрация',
      component: RegisterPage
    }
  ]
})

export default router
