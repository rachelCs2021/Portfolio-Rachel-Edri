import App from "./App.vue";
import router from "./router";
import { createApp } from "vue";
import i18n from "./plugins/i18n.js";
import vuetify from "./plugins/vuetify.js";
import { loadFonts } from "./plugins/webfontloader.js";

loadFonts();

const app = createApp(App);

app.use(i18n);
app.use(router);
app.use(vuetify);

app.mount("#app");
