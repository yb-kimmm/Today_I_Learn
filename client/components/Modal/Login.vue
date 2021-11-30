<template>
    <div  class="body">
      <div class="row">
        <label for="user-email">이메일</label>
        <input id="user-email" type="email" v-model="email" />
      </div>
      <div class="row">
        <label for="user-password">비밀번호</label>
        <input id="user-password" type="password" v-model="password" />
      </div>
      <button class="login-btn" @click="loginWithEmail">이메일로 로그인</button>
    </div>
</template>
<script>
import { mapState } from "vuex";


export default {
  computed: { ...mapState(["modal"]) },
  data() {
    return {
      email: null,
      password: null,
      };
  },
  
  methods: {
    async loginWithEmail() {

      const data = await this.$axios.$post(`http://localhost:8080/user/login`, {
        email: this.email,
        password: this.password
      });

      // 로그인 에러 캐칭
      if (data.error) {
        return;
      }

      this.$store.commit("user/SET_USER", {
        email: data.email,
        nickname: data.nickname,
        token: data.token
      });

      this.$store.commit("modal/SET_LOGIN_MODAL_CLOSE");
    },
    
  }
};
</script>
<style lang="scss" scoped>
#login-modal {
  background: white;
  width: 520px;
  .body {
    font-size: 16px;
    padding: 0 30px;
    line-height: 24px;
    p {
      padding: 20px 0;
      margin: 0;
    }
    .info {
      color: rgb(148, 150, 155);
      font-size: 14px;
      letter-spacing: -0.1px;
      margin: 20px 0 30px;
      line-height: 21px;
    }
    .row {
      margin: 20px 0;
      label {
        display: block;
      }
      input {
        width: 100%;
        box-sizing: border-box;
        padding: 12px;
      }
    }
    
    .login-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      background: rgb(55, 172, 201);
      border: none;
      color: white;
      font-size: 24px;
      font-weight: 400;
      width: 100%;
      height: 64px;
      margin-bottom: 30px;
    }
    .left-time {
      text-align: center;
      color: rgb(55, 172, 201);
      font-size: 14px;
      font-weight: 700;
      margin-top: 16px;
    }
  }
  .foot {
    color: rgb(160, 160, 174);
    font-size: 14px;
    line-height: 17.5px;
    text-align: center;
    text-decoration: underline;
    padding: 30px;
  }
}
</style>
