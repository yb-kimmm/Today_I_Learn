<template>
  <div class="board-card">
    <div class="head">
      <div class="board-icod"></div>
      <h2>{{title}}</h2>
      <nuxt-link 
        :to="{
          name : 'topics' , 
          params : {
            id : slug
          }
      }">더보기 > </nuxt-link>

      

    </div>
  </div>
</template>
<script>
export default {
  props : {
    title : {
      type:String , 
      required:true
    },
    slug : {
      type:String , 
      required:true
    } ,

  }
}
</script>
<style lang="">
  
</style>