import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/home",
    name: "Home",
    component: () => import("@/pages/HomePage.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/AboutPage.vue"),
  },
  {
    path: "/experience",
    name: "Experience",
    component: () => import("@/pages/ExperiencePage.vue"),
  },
  {
    path: "/skills",
    name: "Skills",
    component: () => import("@/pages/SkillsPage.vue"),
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => import("@/pages/ProjectsPage.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("@/pages/ContactPage.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
