import { createApp } from "vue";
import { createPinia } from 'pinia'

import "./style.css";
const pinia = createPinia()
import App from "./App.vue";

createApp(App)
  .use(pinia)
  .mount("#app");

