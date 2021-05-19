import Vue from "vue";
import App from "./App.vue";

import { store } from "./store";

Vue.config.productionTip = false;

import "./plugins/elementui";

new Vue({
  store: store,
  render: (h) => h(App),
}).$mount("#app");
