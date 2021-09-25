import VueRouter from "vue-router";
import Vue from "vue";
import Home from "@/components/Home";
import Article from "@/components/Article";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/:id", component: Article, name: "Article" },
  ],
});

export default router;
