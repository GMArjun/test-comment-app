import { createApp } from "vue";
import App from "./App.vue";
import lang from "./locale";

import "./assets/scss/tailwind.css";

const app = createApp(App);
app.config.globalProperties.$lang = lang;
app.mount("#app");
