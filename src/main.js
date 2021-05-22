import Vue from "vue";
import App from "./App.vue";
import { store } from "./store";
import { router } from "./router";

Vue.config.productionTip = false;

import "./plugins/elementui";

let _Vue = Vue;

new _Vue({
  data() {
    return {
      msg: "Hello world",
    };
  },
});

const app = new Vue({
  store: store,
  router: router,
  render: (h) => h(App),
});

app.$mount("#app");
