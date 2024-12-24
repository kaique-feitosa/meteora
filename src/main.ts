import { createApp } from "vue";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import App from "./App.vue";
import store from "./store";

createApp(App).use(store).mount("#app");
