import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import LoginForm from '/LoginForm.vue';
import RestablecerComp from '/RestablecerComp.vue';

const routes = [
  { path: '/Login', component: LoginForm },
  { path: '/Restablecer', component: RestablecerComp },
];

const router = new VueRouter({
  routes,
});

export default router;
