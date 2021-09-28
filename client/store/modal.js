// Modal 상태
export const state = () => ({
  login: { show: false, directLogin: false }
});

export const mutations = {
  SET_LOGIN_MODAL_OPEN(state) {
    state.login.show = true;
  },
  SET_LOGIN_MODAL_DIRECT_LOGIN(state) {
    state.login.directLogin = true;
  },
  SET_LOGIN_MODAL_CLOSE(state) {
    state.login = {
      show: false,
      directLogin: false
    };
  }
};

export const actions = {};
