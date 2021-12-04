<template>
  <div class="nav-container">
    <nav>
      <div class="side-block">
        <nuxt-link to="/" id="logo-btn">
          <img src="/logo/main.png" alt="블라인드 로고" width="150" />
        </nuxt-link>
        <nuxt-link to="/" :class="['text-menu', $route.name === 'index' && 'active']">홈</nuxt-link>
        <nuxt-link to="/write" :class="['text-menu', $route.name === 'write' && 'active']">글쓰기</nuxt-link>
      </div>
      <div class="side-block">
        <!-- <SmallSearchbar /> -->
        <button @click.prevent="clickWritingButton"  class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="12" height="20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 5a1 1 0 011 1v3h3a1 1 0 110 2H7v3a1 1 0 11-2 0v-3H2a1 1 0 110-2h3V6a1 1 0 011-1z"/>
          </svg>
          글쓰기
        </button>

        <button @click.prevent="clickLoginButton"  class="hover:bg-light-blue-200 hover:text-light-blue-800 group flex items-center rounded-md bg-light-blue-100 text-light-blue-600 text-sm font-medium px-4 py-2">
          <svg class="group-hover:text-light-blue-600 text-light-blue-500 mr-2" width="18" height="20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
          </svg>
          {{!user.email   ? "로그인": "로그아웃"}}
        </button>

        
      </div>
      <LoginModal />
      <WritingModal />
    </nav>
  </div>
</template>
<script>
import SmallSearchbar from "@/components/GNB/SmallSearchbar";
import LoginModal from "@/components/Modal/LoginAndRegister";
import WritingModal from "@/components/Modal/Writing";
import { mapState } from "vuex";
export default {
  components: {
    SmallSearchbar,
    LoginModal,
    WritingModal,
  },
  computed: {
    ...mapState(["user","modal"])
  },
  methods: {
    clickWritingButton() {
      if (!this.user.email) {
        this.$store.commit("modal/SET_LOGIN_MODAL_OPEN");
        return;
      }
      this.$store.commit("modal/SET_WRITING_MODAL_STATE", true);
    },
    clickLoginButton() {
      if (!this.user.email) {
        this.$store.commit("modal/SET_LOGIN_MODAL_OPEN");
        return;
      }
      this.logout();
    },
    logout() {
      this.$store.commit("user/SET_USER", {
        email: null,
        nickname: null
      });

      alert("로그아웃.!")
    }
  }
};
</script>
<style lang="scss" scoped>
.nav-container {
  border-bottom: 1px solid #d4d4d4;
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 0 20px;
  max-width: 1100px;
  .side-block {
    display: flex;
    height: 100%;
    align-items: center;
    #logo-btn {
      margin-right: 60px;
    }
    .text-menu {
      color: #222;
      font-size: 20px;
      margin-right: 30px;
    }
    
  }
}
</style>
