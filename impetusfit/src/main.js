import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import { Quasar } from "quasar";
import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";

const myApp = createApp(App).use(createPinia());

myApp.use(Quasar, {
  plugins: {},
});

myApp.mount("#app");
