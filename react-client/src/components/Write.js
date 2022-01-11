import { useEffect, useRef, useState } from "react";
import { Editor } from "@toast-ui/react-editor";

import "@toast-ui/editor/dist/toastui-editor.css";
import "@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css";
import "@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css";

import "tui-color-picker/dist/tui-color-picker.css";
import Confirm from "./Modal/Confirm";

import axios from "../api";
import { useNavigate } from "react-router-dom";

import { RadioGroup } from "@headlessui/react";
import tw from "tailwind-styled-components";
import AWS from "aws-sdk";

const S3_BUCKET = "nanyb-bucket";
const REGION = "ap-northeast-2";

// AWS.config.update({
//   accessKeyId: "AKIA5EITWKEV6X6JNGFO",
//   secretAccessKey: "9EGk8bW2p4kNQkHBW8OWkuGicP3N36cbB13H",
// });

// const myBucket = new AWS.S3({
//   params: { Bucket: S3_BUCKET },
//   region: REGION,
// });

const BlueButton = tw.button`
  flex justify-end text-sky-700 hover:text-white border border-sky-900 hover:bg-sky-900 focus:ring-4 focus:ring-sky-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-sky-900 dark:text-sky-900 dark:hover:text-white dark:hover:bg-sky-900 dark:focus:ring-sky-900
`;

const RedButton = tw.button`
  flex text-red-900 hover:text-white border border-red-900 hover:bg-red-900 focus:ring-4 focus:ring-red-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 mb-3 dark:border-red-900 dark:text-red-900 dark:hover:text-white dark:hover:bg-red-900 dark:focus:ring-red-900
`;

const Write = () => {
  const [totalBoard, setTotalBoard] = useState([]);
  const [selected, setSelected] = useState();
  const [inputs, setInputs] = useState({
    title: "",
    content: "",
    board: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출

    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const editorRef = useRef();

  if (editorRef.current) {
    editorRef.current
      .getInstance()
      .addHook("addImageBlobHook", (blob, callback) => {
        (async () => {
          let formData = new FormData();
          formData.append("file", blob);

          console.log(formData);

          console.log("이미지가 업로드 됐습니다.");

          // const params = {
          //   ACL: "public-read",
          //   Body: formData,
          //   Bucket: S3_BUCKET,
          //   Key: formData.name,
          // };

          // myBucket
          //   .putObject(params)
          //   .on("httpUploadProgress", (evt) => {
          //     // setProgress(Math.round((evt.loaded / evt.total) * 100))
          //   })
          //   .send((err) => {
          //     if (err) console.log(err);
          //   });

          const { data: filename } = await axios({
            headers: { "content-type": "multipart/formdata" },
            data: formData,
            url: "/upload/file",
            method: "post",
          });
          .then((response) => {
            console.log(response);
          });

          const imageUrl = `/file/upload/` + filename;

          // // Image 를 가져올 수 있는 URL 을 callback 메서드에 넣어주면 자동으로 이미지를 가져온다.
          callback(imageUrl, "iamge");
        })();

        return false;
      });
  }
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

  let navigate = useNavigate();

  const uploadArticle = async () => {
    const html = editorRef.current.getInstance().getHtml();

    inputs.content = html;
    inputs.board = selected;

    if (!inputs.content || !inputs.title || !inputs.board) {
      alert("제목 및 내용을 입력해주세요.");
      return;
    }

    const data = await axios({
      url: "/article/create",
      method: "post",
      data: {
        content: inputs.content,
        board: inputs.board,
        title: inputs.title,
      },
    });

    if (!data) {
      return;
    }

    navigate(`/article/${data.key}`);
  };

  function CheckIcon(props) {
    return (
      <svg viewBox="0 0 24 24" fill="none" {...props}>
        <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
        <path
          d="M7 13l3 3 7-7"
          stroke="#fff"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <div>
      <div className="mx-auto max-w-6xl py-10 h-full">
        <div className="py-4">
          <button className="flex">
            <span></span>
          </button>

          <div className="md:flex md:items-center mb-6">
            <div className="">
              <label className="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                제목
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                onChange={onChange}
                type="text"
                name="title"
                className="p-4 w-80 h-10 rounded text-sm focus:outline-none border border-gray-200 focus:border-sky-900 "
                placeholder="제목을 입력해주세요."
              />
            </div>
          </div>

          <input type="hidden" name="board" onChange={onChange} />
          <input type="hidden" name="content" onChange={onChange} />
        </div>

        <div className="min-h-30 h-30 ">
          <div className="overflow-auto	border-b-1 border-b-solid border-b-sky ">
            {totalBoard.map((board) => (
              <div key={board._id} className="w-full px-4 pb-12">
                <div className="w-full max-w-xs">
                  <RadioGroup value={selected} onChange={setSelected}>
                    <RadioGroup.Label className="sr-only"></RadioGroup.Label>
                    <div className="space-y-2">
                      {totalBoard.map((board) => (
                        <RadioGroup.Option
                          key={board._id}
                          value={board._id}
                          className={({ active, checked }) =>
                            `${
                              active
                                ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                                : ""
                            }
                              ${
                                checked
                                  ? "bg-sky-900 bg-opacity-75 text-white"
                                  : "bg-white"
                              }
                                relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                          }
                        >
                          {({ active, checked }) => (
                            <>
                              <div className="flex items-center justify-between w-full">
                                <div className="flex items-center">
                                  <div className="text-sm">
                                    <RadioGroup.Label
                                      as="p"
                                      className={`font-medium  ${
                                        checked ? "text-white" : "text-gray-900"
                                      }`}
                                    >
                                      {board.title}
                                    </RadioGroup.Label>
                                  </div>
                                </div>
                                {checked && (
                                  <div className="flex-shrink-0 text-white">
                                    <CheckIcon className="w-6 h-6" />
                                  </div>
                                )}
                              </div>
                            </>
                          )}
                        </RadioGroup.Option>
                      ))}
                    </div>
                  </RadioGroup>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Editor
          previewStyle="vertical"
          height="500px"
          initialEditType="wysiwyg"
          initialValue="hello"
          hideModeSwitch="false"
          ref={editorRef}
          minHeight="500px"
        />

        <div className="mx-auto x-full py-10 justify-end flex">
          <RedButton>
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
          </RedButton>

          <BlueButton onClick={uploadArticle}>
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
          </BlueButton>
        </div>
      </div>
      <Confirm title={"asd"} />
    </div>
  );
};

export default Write;
