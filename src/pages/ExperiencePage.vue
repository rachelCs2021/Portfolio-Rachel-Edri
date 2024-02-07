<template>
  <div class="pa-10 bg-black">
    <div>
      <h4>{{ t("experience.title") }}</h4>
      <p>{{ t("experience.subtitle") }}</p>
    </div>

    <div
      v-for="(exp, index) in state.experienceArr"
      :key="index"
      class="d-flex"
    >
      <v-card
        hover
        min-width="500"
        class="ma-5"
        :title="`${exp.role} | ${exp.job}`"
        :subtitle="`${exp.date} | ${exp.location}`"
      >
        <v-list-item
          v-for="(lan, index) in exp.langueges"
          :key="index"
          :title="`* ${lan}`"
        ></v-list-item>
      </v-card>
    </div>
  </div>
</template>

<script setup>
import { reactive } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

const state = reactive({
  experienceArr: [
    {
      role: "Full Stack Developer",
      job: "Student Job",
      date: "MAR 2022 - NOV 2022",
      location: "SHA'AR BINYAMIN, ISRAEL",
      langueges: ["REACT", "NODE.JS", "MONGODB"],
    },
    {
      role: "Full Stack Developer - FrontEnd",
      job: "Full Time Job",
      date: "NOV 2022 - PRESENT",
      location: "JERUSALEM, ISRAEL",
      langueges: ["VUE", "JAVA-SCRIPT", "TYPE-SCRIPT"],
    },
  ],
});
</script>