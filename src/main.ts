import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { Quasar } from "quasar";
import stores from "./stores";
import quasarUserOptions from "./quasar-user-options";

createApp(App)
  .use(stores)
  .use(Quasar, quasarUserOptions)
  .use(router)
  .mount("#app");
