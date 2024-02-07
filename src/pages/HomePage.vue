<template>
  <div class="pa-10 bg-black d-flex">
    <div>

    <v-img :src="HelloImage" :width="400"></v-img>
    </div>

    <div>
        <p>{{ t("home.wellcome")}}</p>
        <h4>{{ t("home.name") }}</h4>
        <h4>{{ t("home.role") }}</h4>
    </div>
  </div>
</template>

<script setup>
import { HelloImage } from "../assets";
import { useI18n } from "vue-i18n";

 const { t } = useI18n();
</script>