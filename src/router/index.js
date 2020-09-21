import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "../layout";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        direct: "/home"
      },
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
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
