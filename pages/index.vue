<template>
  <main v-if="page===0">
    <img src="" alt="원피스 캐릭터들">
    <h1>원피스 MBTI</h1>
    <h1>나와 닮은 원피스 캐릭터 찾기!</h1>
    <h2>나와 같은 원피스 캐릭터는 누구일까요?</h2>
    <Button text="테스트 시작!" />
  </main>

<!-- 퀴즈페이지 -->
  <main v-else>
  </main>
</template>

<script>
export default {
  computed : {
    page(){
      return 0;
    },
    quiz(){
      return [];
    }
  }
}
</script>
<style>
main {
  padding : 30px 0;
  width : 100%;
  max-width : 360px;
  margin : auto;
  text-align : center;
}

h1 {
  font-size : 1.8em;
}

h2{
  font-size: 1.2em;
  color : #b9b8b7;
  margin-bottom : 25px
}
</style>