// 모달 상태
export const state = () => ({
  login: { show: false, directLogin: false },
  register: { show: false, directRegister: false },
  otp: { show: false },
  writing: false,
});

export const mutations = {
  SET_LOGIN_MODAL_OPEN(state) {
    state.login.show = true;
    state.otp.show = true;
  },
  SET_LOGIN_MODAL_DIRECT_LOGIN(state) {
    state.login.directLogin = true;
    state.register.directRegister = false;
    state.otp.show = false;
  },
  SET_LOGIN_MODAL_DIRECT_REGISTER(state) {
    state.register.directRegister = true;
    state.login.directLogin = false;
    state.otp.show = false;
  },
  SET_LOGIN_MODAL_CLOSE(state) {
    state.login = {
      show: false,
      directLogin: false,
      directRegister: false,
    };
  },
  SET_WRITING_MODAL_STATE(state, display) {
    state.writing = display;
  },
};

export const actions = {};
