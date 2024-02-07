<template>
  <v-app>
    <v-main>
      <router-view />
      <AppBar>
        <template #tabs>
          <v-tabs slider-color="light-blue-lighten-4" color="white" fixed-tabs>
            <v-tab
              v-for="(tab, index) in state.tabsItems"
              :key="index"
              :to="tab.to"
              :value="tab.title"
              class="text-light-blue-lighten-4"
            >
              <!-- <v-icon :icon="tab.icon" /> -->
              {{ tab.title }}
            </v-tab>
          </v-tabs>
        </template>
      </AppBar>

      <home-page id="HOME"/>
      <about-page />
      <experience-page />
      <skills-page id="SKILLS" />
      <projects-page />
      <contact-page />
    </v-main>
  </v-app>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { AppBar } from "./components";
import { AboutImage } from "./assets";
import {
  HomePage,
  AboutPage,
  experiencePage,
  skillsPage,
  projectsPage,
  contactPage,
} from "./pages";

const { t } = useI18n();

const state = reactive({
  tabsItems: [
    {
      title: "HOME",
      to: "/home",
    },
    {
      title: "ABOUT",
      to: "/about",
    },
    {
      title: "EXPERIENCE",
      to: "/experience",
    },
    {
      title: "SKILLS",
      to: "/skills",
    },
    {
      title: "PROJECTS",
      to: "/projects",
    },
    {
      title: "CONTACT",
      to: "/contact",
    },
  ],
});
</script>

<style>
body {
  background-color: black;
}
</style>