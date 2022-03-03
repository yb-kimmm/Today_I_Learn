import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/components/Home";
import Write from "@/components/page/Write";
import Admin from "@/components/page/Admin";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/write", name: "Write", component: Write },
    { path: "/admin", name: "Admin", component: Admin },
  ],
});

export default router;
