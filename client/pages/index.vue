<template>
  <div class="main-container">
    <main>
      <SearchBar/>  
      <BestBoardCard/>
      <BoardCard v-for="b in mainContent" :key="b.slug"/>
    </main>    
  </div>
</template>


<script>
import BestBoardCard from "@/components/Main/BestBoardCard";
import BoardCard from "@/components/Main/BoardCard";

export default{
  components: {
    BestBoardCard,
    BoardCard
  },
  data(){
    return {
      mainContent : []
    }
  },
  created(){
    this.getRecentBoardArticleList();
  },
  methods: {
    async getRecentBoardArticleList(){
      const data = await this.$api.$get("/main")
      if(data.error){
        return
      }

      this.mainContent = data.content;




    }
  },

}
</script>

<style>
.main-container {
  display : flex
}
</style>
