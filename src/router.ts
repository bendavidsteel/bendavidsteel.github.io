import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "",
      component: () => import("@/views/pro/Pro.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/pro/Home.vue"),
        },
        {
          path: "/articles/:slug",
          component: () => import("@/views/pro/Article.vue"),
          props: true
        },
        {
          path: "/about",
          component: () => import("@/views/pro/About.vue")
        },
        {
          path: "/visuals",
          component: () => import('@/views/pro/Visuals.vue')
        },
        {
          path: "/visual/:slug",
          component: () => import("@/views/pro/Visual.vue"),
          props: true
        }
      ]
    },
    {
      path: "/aethylus",
      component: () => import("@/views/per/Home.vue")
    },
    {
      path: "/forellie",
      component: () => import("@/views/misc/Ellie.vue")
    },
    {
      path: "/northumbrianbells",
      component: () => import("@/views/misc/NorthBells.vue")
    },
    {
      path: "/fullscreen/visual/:slug",
      component: () => import("@/views/pro/Visual.vue"),
      props: true
    }
  ]
});