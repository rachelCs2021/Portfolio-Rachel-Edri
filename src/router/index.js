import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../layouts/DefaultLayout.vue"
import { HomePage, AboutPage, experiencePage, skillsPage, projectsPage, contactPage } from "../pages"

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
  },
  {
    path: "/home",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/experience",
    name: "Experience",
    component: experiencePage,
  },
  {
    path: "/skills",
    name: "Skills",
    component: skillsPage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: projectsPage,
  },
  {
    path: "/contact",
    name: "Contact",
    component: contactPage,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
