<template>
  <div id="app">
    <Layout/>
    <router-view></router-view>
  </div>
</template>


<script>
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Layout from './layout/Layout'

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';

Vue.use(Vuex)
Vue.use(VueRouter)

export default {
  name: "App",
  components: {
    Layout,
  }
};
</script>

<style lang="scss">
@import "@/assets/board.scss";
@import "@/assets/global.scss";
</style>
