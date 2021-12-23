import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import "tui-color-picker/dist/tui-color-picker.css";
import Confirm from "./Modal/Confirm";

import axios from "../api";
import { useDispatch } from "react-redux";
import { setWritingModalState } from "../store/modal";

const Write = () => {
  const [totalBoard, setTotalBoard] = useState([]);

  const dispatch = useDispatch();
  const editorRef = useRef();

  const fetchHotels = async () => {
    try {
      // 요청 처음에 초기화
      setTotalBoard([]);

      const data = await axios({
        url: "/board/list",
        method: "get",
      });

      setTotalBoard(data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchHotels();
  }, []);

  const uploadArticle = async () => {
    const html = editorRef.current.getInstance().getHtml();

    // this.content = html;
    // if (!this.content || !this.content) {
    //   alert("제목 및 내용을 입력해주세요.");
    //   return;
    // }

    // const data = await axios({
    //   url: "/article/create",
    //   method: "post",
    //   data: {
    //     title: this.title,
    //     content: this.content,
    //     board: this.boardList[this.currentSelectedBoard]._id,
    //     image: this.imgFile,
    //   },
    // });

    // if (!data) {
    //   return;
    // }

    // closeConfirmModal();
    // dispatch(setWritingModalState());
  };

  const clickBoard = (index) => {
    this.currentSelectedBoard = index;
    this.isBoardSelected = false;
  };

  const closeConfirmModal = () => {
    this.showConfirmModal = false;
    this.confirmTitle = "";
  };

  const listenConfirm = (confirm) => {
    !confirm ? this.closeConfirmModal() : this.uploadArticle();
  };

  const confirmUploadModal = () => {
    this.showConfirmModal = true;
    this.confirmTitle = `'${
      this.boardList[this.currentSelectedBoard].title
    }'에 글을 등록하시겠습니까?`;
  };

  return (
    <div>
      <div className="mx-auto max-w-6xl py-10 h-full">
        <div className="py-4">
          {/* @click.prevent="isBoardSelected = !isBoardSelected" */}
          <button className="flex">
            {/* {{boardList[currentSelectedBoard].title}} */}
            <span></span>

            {/* :class="[isBoardSelected && 'rotated', 'down-icon']"  */}
            {/* <ChevronDownIcon /> */}
          </button>

          {/* <div className="absolute overflow-auto	border-b-1 border-b-solid border-b-sky h-full max-h-72">
            {totalBoard.map((board) => (
              <div key={board._id}>{board.title}</div>
            ))}
          </div> */}

          <input type="text" name="title" placeholder="제목을 입력해주세요." />
          <input type="hidden" name="content" />
        </div>

        <Editor
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          initialValue="hello"
          hideModeSwitch="false"
          ref={editorRef}
          minHeight="600px"
        />

        <div className="mx-auto x-full py-10 justify-between flex">
          <button className="flex text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 px-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            취소
          </button>

          <button
            onClick={uploadArticle}
            className="flex justify-end text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-sky-400 dark:text-sky-400 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 px-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M5 13l4 4L19 7" />
            </svg>
            작성
          </button>
        </div>
      </div>
      <Confirm />
    </div>
  );
};

export default Write;
