<template>
  <div>
    <div class="container mx-auto px-4 my-4 ">
      <img src="@/static/main/okinawa.png" alt=""  class="mx-auto justify-center items-end pb-4 flex rounded-3xl ">
    </div>

    <div class="main-container">

    </div>

  </div>
</template>
<script>

export default {
  components: {
  },
  data() {
    return {
      mainContent: [],
    };
  },
  created() {
    this.getRecentBoardArticleList();
  },
  methods: {
    async getRecentBoardArticleList() {
      const data = await this.$api.get("http://localhost:8080/main");

      if (data.error) {
        return;
      }

      if(!data.content){
        return;
      }

      this.mainContent = data.content;
    }
  }
};
</script>
<style lang="scss">
.main-container {
  display: flex;
  margin: auto;
  width: 100%;
  justify-content : space-between;;
  max-width: 1100px;
  main {
    width: 100%;
    max-width: 736px;
  }
}
.board-card-container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px 40px;
}
</style>
