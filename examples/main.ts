import { createApp } from "vue";
import App from "./App.vue";
import Unitify from "../packages/core/index";
const app = createApp(App);
app.use(Unitify);
app.mount("#app");
