<template>
  <div>
    <GNB />
  </div>
</template>
<script>
  
import GNB from "../components/Gnb";

export default {
  created() {
    this.initLogin();
  },
  components: {
    GNB
  },
  methods: {
    async initLogin() {
      if (process.browser) {
        const token = localStorage.getItem("token");
        if (!token) return;

        const data = await this.$api({
          url : '/user/token',
          method: 'get'
        });

        if (!data.email) {
          return;
        }

        this.$store.commit("SET_USER", {
          email: data.email,
          nickname: data.nickname,
          authYn : data.authYn,
          token: token,
        });
      }
    }
  }
};
</script>
