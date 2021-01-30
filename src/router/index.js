import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("@/views/home")
      },
      {
        path: "/my",
        name: "My",
        component: () => import("@/views/my")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
