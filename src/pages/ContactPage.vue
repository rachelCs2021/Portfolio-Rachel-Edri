<template>
  <div class="pa-10 bg-black d-flex">
    <div>
      <v-img :src="ContactImage" :width="400"></v-img>
    </div>

    <div>
      <h4>{{ t("contact.title") }}</h4>
      <p>{{ t("contact.subtitle") }}</p>
      <h6>{{ t("contact.phone") }}: 0509482582</h6>
      <h6>{{ t("contact.email") }}: rachelchasha@gmail.com</h6>

      <v-form v-model="state.valid">
        <v-text-field
          required
          hide-details
          :counter="10"
          class="my-4"
          label="Your Name"
          variant="outlined"
          v-model="state.name"
          :rules="state.nameRules"
        ></v-text-field>

        <v-text-field
          required
          hide-details
          class="my-4"
          label="Your Email"
          variant="outlined"
          v-model="state.email"
          :rules="state.emailRules"
        ></v-text-field>

        <v-text-field
          required
          hide-details
          class="my-4"
          variant="outlined"
          :rules="subjectRules"
          v-model="state.subject"
          label="Write a Subject"
        ></v-text-field>

        <v-textarea
          class="my-4"
          variant="outlined"
          label="Write your Message"
        ></v-textarea>

        <v-btn>SUBMIT</v-btn>
      </v-form>
    </div>
  </div>
</template>

<script setup>
import { ContactImage } from "../assets";
import { useI18n } from "vue-i18n";
import { reactive } from "vue";

const { t } = useI18n();

const state = reactive({
  valid: false,
  formData: {
    name: "",
    email: "",
    subject: "",
    message: "",
  },
  nameRules: [
    (value) => {
      if (value) return true;

      return "Name is required.";
    },
    (value) => {
      if (value?.length <= 10) return true;

      return "Name must be less than 10 characters.";
    },
  ],
  emailRules: [
    (value) => {
      if (value) return true;

      return "E-mail is requred.";
    },
    (value) => {
      if (/.+@.+\..+/.test(value)) return true;

      return "E-mail must be valid.";
    },
  ],
  subjectRules: [
    (value) => {
      if (value) return true;

      return "Subject is requred.";
    },
  ],
});
</script>