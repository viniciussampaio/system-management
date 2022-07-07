import { createRouter, createWebHistory } from "vue-router";

function lazyLoad(page) {
  return import(`./components/${page}.vue`);
}

const routes = [
  {
    path: "/register",
    name: "Register",
    component: lazyLoad("Register"),
  },
  {
    path: "/login",
    name: "Login",
    component: lazyLoad("Login"),
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
