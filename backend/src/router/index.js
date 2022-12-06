
import {createRouter, createWebHistory} from "vue-router";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
          requiresGuest: true
        }
    },
    {
      path: '/request-password',
      name: 'requestPassword',
      component: RequestPassword,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/reset-password/:token',
      name: 'resetPassword',
      component: ResetPassword,
      meta: {
        requiresGuest: true
      }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
  })



export default router;