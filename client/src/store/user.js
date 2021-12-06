// 로그인 사용자 상태
const store = new Vuex.Store({
  state = () => ({
    email: null,
    nickname: null
  }),
  mutations = {
    SET_USER(state, { email, nickname, token }) {
      state.email = email;
      state.nickname = nickname;
      if (token) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token");
      }
    }
  },
  actions = {}
})

