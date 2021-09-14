import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuex from 'vuex';

Vue.config.productionTip = false;
Vue.use(Vuex);

const store = new Vuex.store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

store.commit('increment');
console.log(store.state.count);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
