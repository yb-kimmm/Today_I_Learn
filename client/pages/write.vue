<template> 
  <div class="mx-auto max-w-6xl py-10 h-full" > 
    <div>
      <editor :initialValue="text" ref="editor" align="left" height="650px"> 
      </editor> 
      <viewer v-if="toggle" :initialValue="text"></viewer> 
    </div>


    <div class="mx-auto x-full py-10 justify-between flex">
      
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
        취소
      </button>
      
      <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
        작성
      </button>


    </div>
  </div> 

</template> 
<script> 
  export default { 
    data() { 
      return { text: '# 이곳에 글을 써주세요! 오른쪽은 미리보기 입니다.', 
      toggle: false, 
      } 
    }, 
  }; 
</script>
<style scoped>

</style>
