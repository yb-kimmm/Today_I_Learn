import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import "./assets/tailwind.css";
import "es6-promise/auto";
import axios from "axios";

Vue.prototype.$api = axios;
Vue.config.productionTip = false;
Vue.use(require("vue-moment"));

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
