<template lang="">
  <div>
    <Card :article="articles" @update="updateCard" @delete="moveToHome"/>
  </div>
</template>
<script>
import axios from "axios";
import Card from "@/components/Card";

export default {
  components: {
    Card,
  },
  data(){
    return {
      articles: {
        id : null , 
        content : null,
        created : null,
        createdAt : null
      }
    }
  },
  created(){
    this.findOneArticle();
  },
  methods:{
    async findOneArticle(){
      const articleId = this.$route.params.id;
      const { data } = await axios.get(`http://localhost:3000/read/${articleId}`);
      this.articles = {
        ...data
      };
    },
    updateCard({content}){
        this.articles.content = content;
    },
    moveToHome(){
      this.$router.push({
        name:"Home"
      })
    }
  }
}
</script>
<style>
  article {
    padding : 1em;
    box-shadow : 0 3px 3px #22222222;
    margin-bottom : 1em;
    background : #fafafa
  }
</style>