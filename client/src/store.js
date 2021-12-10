import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //user
    user: {
      email: null,
      nickname: null,
    },
    modal: {
      login: { show: false, directLogin: false },
      register: { show: false, directRegister: false },
      otp: { show: false },
      writing: false,
    },
  },

  getters: {
    // Here we will create a getter
  },

  mutations: {
    // user
    SET_USER(state, { email, nickname, token }) {
      state.user.email = email;
      state.user.nickname = nickname;
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    },
    // modal
    SET_LOGIN_MODAL_OPEN(state) {
      state.modal.login.show = true;
      state.modal.register.directRegister = false;
      state.modal.login.directLogin = true;
    },
    SET_LOGIN_MODAL_DIRECT_LOGIN(state) {
      state.modal.login.directLogin = true;
      state.modal.register.directRegister = false;
    },
    SET_LOGIN_MODAL_DIRECT_REGISTER(state) {
      state.modal.register.directRegister = true;
      state.modal.login.directLogin = false;
    },
    SET_LOGIN_MODAL_CLOSE(state) {
      state.modal.login = {
        show: false,
        directLogin: false,
        directRegister: false,
      };
    },
    SET_WRITING_MODAL_STATE(state, display) {
      state.writing = display;
    },
  },
  actions: {
    // Here we will create Larry
  },
});
