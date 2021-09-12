<template>
  <li>
    {{text}}
    <button @click="itemDelete">삭제</button>
  </li>

</template>
<script>
export default {
  props : {
    index : {type:Number},
    text:{type:String}
  },
  methods: {
    itemDelete(){
      this.$emit('delete' , this.index);
    }
  }
}
</script>
<style lang="">
  
</style>