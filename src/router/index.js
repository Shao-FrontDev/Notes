import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Main from "../views/Main.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/daily", component: Main },
  { path: "/", redirect: "/daily" },
  {
    path: "/login",
    component: Login,
  },
];

export const router = new VueRouter({ routes });
