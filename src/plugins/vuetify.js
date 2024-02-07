// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import { he, en } from "vuetify/locale";
import colors from 'vuetify/util/colors';
import * as labs from "vuetify/labs/components";
import { VBtn } from "vuetify/components/VBtn";
import { VTextField } from "vuetify/lib/components/index.mjs";

export default createVuetify({
  components: {
    ...labs,
  },
  theme: {
    themes: {
      light: {
        colors: {
          primary: colors.lightBlue.lighten4,
          secondary: "#5CBBF6",
        },
      },
    },
  },
  locale: {
    locale: "en",
    fallback: "he",
    messages: { he, en },
  },
  aliases: {
    secondButton: VBtn,
    searchInput: VTextField
  },
  defaults: {
    VSelect: { variant: "outlined", density: "comfortable"},
    VBtn: { class: "mb-4", color: colors.lightBlue.lighten4 },
    secondButton: {
      class: "mr-4 mb-4",
      variant: "outlined",
      color: colors.lightBlue.lighten4,
    },
    VTextField: {
      variant: "solo-inverted",
      density: "comfortable",
      class: "mx-5 my-2",
      clearable: true,
    },
    searchInput: {
     variant: "outlined",
     density: "compact"
    },
    VCard: {
      elevation: "4",
    },
  },
});
