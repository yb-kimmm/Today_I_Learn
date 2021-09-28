<template>
  <div>
    <Nuxt/>
    <GNB />
  </div>
</template>
<script>
import GNB from '../components/GNB.vue';
export default {
  components: { GNB },
  created(){
    this.initLogin();
  },
  methods : {
    async initLogin(){
      if(process.browser){
        const token = localStorage.getItem("token");
        if(!token) return 
        const data = await this.$api.$get("/user/token");

        if(!data.email){
          return;
        }

        this.$store.commit("user/SET_USER" , {
          email : data.email,
          nickname : data.nickname,
          token : token
        })
      }
    }
  }
}
</script>
<style lang="">

</style>