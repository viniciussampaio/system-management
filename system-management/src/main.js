import { createApp } from "vue";
import { Quasar, Notify } from "quasar";
import router from "./router";

import "@quasar/extras/material-icons/material-icons.css";
import "quasar/src/css/index.sass";
import App from "./App.vue";

const myApp = createApp(App).use(router);

myApp.use(Quasar, {
  plugins: { Notify },
});

myApp.mount("#app");
