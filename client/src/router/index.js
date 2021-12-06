import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Write from "@/components/Write";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/write", name: "Write", component: Write },
  ],
});

export default router;
