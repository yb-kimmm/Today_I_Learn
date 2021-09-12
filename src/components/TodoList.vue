<template lang="">
  <div>
    <div>
      <input type="text" v-model="inputValue"/>
      <button @click="addItem">추가하기</button>
      <ul>
        <ListItem v-for="(value , index) in listArray" :key="index" style="style" :text="value" :index="index" @delete="catchDeleteItem"/>
      </ul>
    </div>
  </div>
</template>
<script>
import ListItem from "./ListItem.vue"

export default {
  data() {
    return {
      inputValue : "",
      listArray :[] ,
      style :{
        color :"red"
      }
    }
  },
  components:{
    ListItem
  } ,
  methods : {
    addItem(){
      this.listArray.push(this.inputValue)
      this.inputValue = ""
    } ,
    catchDeleteItem(index){
      this.listArray.splice(index,1)
    }
  }
}
</script>
<style lang="">
  
</style>