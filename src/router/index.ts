import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import Category from '../views/Category.vue';
import SingleProduct from '../views/products/[id].vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products/:id',
      name: 'single-product',
      component: SingleProduct
    },
    {
      path: '/category',
      name: 'category',
      component: Category,
    },
    {
      path: '/auth/login',
      name: 'auth-login',
      component: Login
    },
    {
      path: '/auth/register',
      name: 'auth-register',
      component: Register
    },
  ]
});

export default router