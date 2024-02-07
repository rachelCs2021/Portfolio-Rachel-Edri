<template>
  <div class="pa-10 bg-black">
    <div>
      <h4>{{ t("projects.title") }}</h4>
      <p>{{ t("projects.subtitle") }}</p>
    </div>

    <div
      v-for="(proj, index) in state.projectsArr"
      :key="index"
      class="d-flex flex-row"
    >
      <v-card hover width="300" class="ma-5" elevation="16">
        <v-card-title>{{ proj.projectName }}</v-card-title>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const state = reactive({
  projectsArr: [
    {
      projectName: "proj",
      languege: "",
      isdemo: false,
    },
  ],
});
</script>