import { createApp } from "vue";
import App from "./App.vue";
import lang from "./locale";
import "./assets/scss/style.scss";

const app = createApp(App);
app.config.globalProperties.$lang = lang;
app.mount("#app");
