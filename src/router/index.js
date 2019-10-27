import Vue from "vue";
import VueRouter from "vue-router";
import NotFound from "@/views/404.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/layouts/UserLayout"),
    children: [
      {
        name: "User",
        path: "/",
        redirect: {
          name: "Login"
        }
      },
      {
        name: "Login",
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/User/Login")
      },
      {
        name: "Register",
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/User/Register")
      }
    ]
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "@/layouts/BasicLayout"),
    children: [
      {
        path: "/",
        redirect: {
          name: "Analysis"
        }
      },
      {
        path: "dashboard",
        component: { render: h => h("router-view") },
        children: [
          {
            name: "Dashboard",
            path: "/",
            redirect: {
              name: "Analysis"
            }
          },
          {
            name: "Analysis",
            path: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "@/views/Dashboard/Analysis"
              )
          }
        ]
      },
      {
        path: "/form",
        component: { render: h => h("router-view") },
        children: [
          {
            name: "Form",
            path: "/",
            redirect: {
              name: "BasicForm"
            }
          },
          {
            name: "BasicForm",
            path: "basic-form",
            component: () =>
              import(/* webpackChunkName: "form" */ "@/views/Form/BasicForm")
          },
          {
            path: "step-form",
            children: [
              {
                name: "StepForm",
                path: "/",
                redirect: {
                  name: "Info"
                }
              },
              {
                name: "Info",
                path: "info",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "@/views/Form/StepForm/Info"
                  )
              },
              {
                name: "Confirm",
                path: "confirm",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "@/views/Form/StepForm/Confirm"
                  )
              },
              {
                name: "Result",
                path: "result",
                component: () =>
                  import(
                    /* webpackChunkName: "form" */ "@/views/Form/StepForm/Result"
                  )
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: "NotFound",
    path: "*",
    component: NotFound
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start();
  }
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
