import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import "./assets/tailwind.css";
import "es6-promise/auto";
import api from "./api";

import { store } from "./store";

Vue.prototype.$api = api;
Vue.config.productionTip = false;
Vue.use(require("vue-moment"));

console.log(store);

new Vue({
  render: (h) => h(App),
  store: store,
  router,
}).$mount("#app");
