import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/views/pro/Pro"),
      children: [
        {
          path: "",
          component: () => import("@/views/pro/Home"),
          children: [
            {
              name: "article",
              path: "articles/:slug",
              component: () => import("@/views/pro/Article"),
              props: true
            }
          ]
        },
        {
          path: "about",
          component: () => import("@/views/pro/About")
        }
      ]
    },
    {
      path: "/aethylus",
      component: () => import("@/views/per/Home")
    },
    {
      path: "/forellie",
      component: () => import("@/views/misc/Ellie")
    },
    {
      path: "/northumbrianbells",
      component: () => import("@/views/misc/NorthBells")
    }
  ]
});