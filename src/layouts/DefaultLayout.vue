<template>
  <div>
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
            {{ tab.title }}
          </v-tab>
        </v-tabs>
      </template>
    </AppBar>
    <RouterView />

    <main-page />

    <v-footer app class="text-center text-subtitle-2"
      >created by RACHEL@</v-footer
    >
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";
import { AppBar } from "../components";
import { AboutImage } from "../assets";
import MainPage from "../pages/MainPage.vue";

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
