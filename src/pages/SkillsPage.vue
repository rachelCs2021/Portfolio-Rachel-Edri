<template>
  <div class="pa-10 bg-black">
    <div>
      <h4>{{ t("skills.title") }}</h4>
      <p>{{ t("skills.subtitle") }}</p>
    </div>

    <div
      v-for="(skill, index) in state.skillsArr"
      :key="index"
      class="d-flex flex-row"
    >
      <div>
        <v-card hover width="300" class="ma-5" elevation="16">
          <v-icon>{{ skill.icon }}</v-icon>
          <v-card-title>{{ skill.title }}</v-card-title>
          <v-list-item
            v-for="(sk, index) in skill.skills"
            :key="index"
            :title="`* ${sk}`"
          ></v-list-item>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const state = reactive({
  skillsArr: [
    {
      icon: "mdi-cast-connected",
      title: "Server Side",
      skills: ['NODE JS'],
    },
    {
      icon: "mdi-account-multiple-outline",
      title: "Client Side",
      skills: ['JAVASCRIPT', 'REACT', 'VUE'],
    },
    {
      icon: "mdi-monitor",
      title: "Web Design",
      skills: ['HTML5', 'CSS', 'BOOTSTRAP', 'VUETIFY', 'FIGMA'],
    },
  ],
});
</script>