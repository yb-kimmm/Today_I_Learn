<template> 
  <div class="mx-auto max-w-6xl py-10 h-full" > 
    <div v-if="boardList.length > 0" class="py-4">
        <a class="flex" @click.prevent="isBoardSelected = !isBoardSelected">
          <span>{{boardList[currentSelectedBoard].title}}</span>
          <!-- <ChevronDownIcon :class="[isBoardSelected && 'rotated', 'down-icon']" /> -->
        </a>
      <!-- 드롭다운 부분 -->

      <!-- Todo 추후에 팝업으로 수정 -->
      <div v-if="isBoardSelected" class="absolute overflow-auto	border-b-1 border-b-solid border-b-sky h-full max-h-72">
        <div
          v-for="(b, i) in boardList"
          :key="b._id"
          @click="clickBoard(i)"
        >{{b.title}}</div>


      </div>

    </div>

    <input type="text" v-model="title" placeholder="제목을 입력해주세요." />
    <input type="hidden" v-model="content" placeholder="제목을 입력해주세요." />

    <div>
      <Editor  :initialValue="getEditorText" ref="editor" align="left" height="650px"> 
      </Editor> 
      <Viewer v-if="toggle" :initialValue="getEditorText"></Viewer> 
    </div>


    <div class="mx-auto x-full py-10 justify-between flex">
      <button class="flex text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <router-link to="/" :class="[$route.name === 'index']">
          취소
        </router-link>
      </button>

      <button @click.prevent="confirmUploadModal"  class="flex justify-end text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-sky-400 dark:text-sky-400 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-900">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 px-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
        </svg>
        작성
      </button>
    </div>

    <ConfirmModal :show="showConfirmModal" :title="confirmTitle" @confirm="listenConfirm" />  

  </div> 

</template> 
<script> 
import { mapState } from "vuex";
import ConfirmModal from "@/components/Modal/Confirm";

import { Editor } from '@toast-ui/vue-editor';
import { Viewer } from '@toast-ui/vue-editor';


// import {
//   ChevronDownIcon,
//   CameraIcon,
//   BarChart2Icon,
//   AtSignIcon,
//   HashIcon
// } from "vue-feather-icons";

  export default { 
    components: {
      // ChevronDownIcon,
      // CameraIcon,
      // BarChart2Icon,
      // AtSignIcon,
      // HashIcon,
      Viewer,
      Editor,
      ConfirmModal
    },

    computed: {
      ...mapState(["modal"])
    },
    data() {
      return {
        boardList: [],
        currentSelectedBoard: 0,
        isBoardSelected: false,
        title: null,
        content: null,
        showConfirmModal: false,
        confirmTitle: null,
        imgFile: null,
        getEditorText: '# 이곳에 글을 써주세요! 오른쪽은 미리보기 입니다.', 
        toggle: false, 
      };
    },
    created() {
      this.getBoardList();
    },
    methods: {
      async uploadImage() {
        let formData = new FormData();
        let file = this.$refs.img.files[0];
        formData.append("file", file);
        setTimeout(async () => {
          const data = await this.$api.post("http://localhost:8080/upload", formData);
          if (!data || data.error) {
            return;
          }
          this.imgFile = data.key;
        }, 300);
      },
      async getBoardList() {
        const data = await this.$api.get("http://localhost:8080/board/list");
        if (!Array.isArray(data)) {
          return;
        }
        this.boardList = data;
      },
      clickBoard(index) {
        this.currentSelectedBoard = index;
        this.isBoardSelected = false;
      },
      closeConfirmModal() {
        this.showConfirmModal = false;
        this.confirmTitle = null;
      },
      listenConfirm(confirm) {
        !confirm ? this.closeConfirmModal() : this.uploadArticle();
      },
      confirmUploadModal() {
        this.showConfirmModal = true;
        this.confirmTitle = `'${
          this.boardList[this.currentSelectedBoard].title
        }'에 글을 등록하시겠습니까?`;
      },
      async uploadArticle() {
        let html = this.$refs.editor.editor.getHtml();
        this.content = html;

        if(!this.content || !this.content){
          alert("제목 및 내용을 입력해주세요.")
          return;
        }

        const data = await this.$api.post("http://localhost:8080/article/create", {
          title: this.title,
          content: this.content,
          board: this.boardList[this.currentSelectedBoard]._id,
          image: this.imgFile
        });

        if (!data) {
          return;
        }
        this.closeConfirmModal();
        this.$store.commit("modal/SET_WRITING_MODAL_STATE", false);
      }
    }
    
  }; 
</script>
<style scoped>

</style>
