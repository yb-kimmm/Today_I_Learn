import React from "react";

// 여기 css를 수정해서 코드 하이라이팅 커스텀 가능

import "@toast-ui/editor/dist/toastui-editor.css";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";

import "tui-color-picker/dist/tui-color-picker.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

class Write extends React.Component {
  editorRef = React.createRef();

  handleClick = () => {
    // this.editorRef.current.getInstance().exec("Bold");
  };

  render() {
    return (
      <div className="mx-auto max-w-6xl py-10 h-full">
        <Editor
          previewStyle="vertical"
          height="600px"
          initialEditType="wysiwyg"
          initialValue="hello"
          hideModeSwitch="false"
          ref={this.editorRef}
          minHeight="600px"
        />

        {/* <button onClick={this.handleClick}>make bold</button> */}

        <div class="mx-auto x-full py-10 justify-between flex">
          <button class="flex text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 px-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            취소
          </button>

          <button class="flex justify-end text-sky-700 hover:text-white border border-sky-700 hover:bg-sky-800 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-sky-400 dark:text-sky-400 dark:hover:text-white dark:hover:bg-sky-500 dark:focus:ring-sky-900">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 px-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            작성
          </button>
        </div>
      </div>
    );
  }
}

export default Write;
