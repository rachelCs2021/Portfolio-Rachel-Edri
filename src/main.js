import App from "./App.vue";
import i18n from "./plugins/i18n";
import { createApp } from "vue";

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);

app.use(i18n);
app.use(vuetify);

app.mount("#app");
