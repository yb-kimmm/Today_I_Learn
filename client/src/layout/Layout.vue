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


        const data = await this.$api.get("http://localhost:8080/user/token");

        if (!data.email) {
          return;
        }

        this.$store.commit("user/SET_USER", {
          email: data.email,
          nickname: data.nickname,
          token: token
        });
      }
    }
  }
};
</script>
