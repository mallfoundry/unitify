import { createSSRApp } from "vue";
import App from "./App.vue";
import Unitfy from "../../core"
export function createApp() {
  const app = createSSRApp(App);
  app.use(Unitfy)
  return {
    app,
  };
}
