import type { RouteRecordRaw } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "",
    component: MainLayout,
    meta: {
      requiresAuth: false,
    },
    children: [
      {
        path: "",
        name: "Dashboard",
        component: () =>
          import(/* webpackChunkName: "main" */ "../views/DashboardView.vue"),
        meta: {
          requiresAuth: true,
        },
      },
      {
        path: "about",
        name: "About",
        component: () =>
          import(/* webpackChunkName: "main" */ "../views/AboutView.vue"),
        meta: {
          requiresAuth: true,
        },
      },
    ],
  },
  {
    path: "",
    component: DefaultLayout,
    children: [
      {
        path: "404",
        name: "404",
        component: () =>
          import(/* webpackChunkName: "404" */ "../views/404View.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      {
        path: "signin",
        name: "SignIn",
        component: () =>
          import(/* webpackChunkName: "auth" */ "../views/auth/SignInView.vue"),
        meta: {
          requiresAuth: false,
        },
      },
      //   {
      //     path: "forgot-password",
      //     name: "ForgotPassword",
      //     component: () =>
      //       import(
      //         /* webpackChunkName: "auth" */ "../views/auth/ForgotPassword.vue"
      //       ),
      //     meta: {
      //       requiresAuth: false,
      //     },
      //   },
      //   {
      //     path: "signup",
      //     name: "SignUp",
      //     component: () =>
      //       import(/* webpackChunkName: "auth" */ "../views/auth/SignUp.vue"),
      //     meta: {
      //       requiresAuth: false,
      //     },
      //   },
    ],
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
];

export default routes;
