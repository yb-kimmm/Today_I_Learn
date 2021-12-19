import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom"; // * BrowserRouter 불러오기
import { createStore } from "redux";
import rootReducer from "./store";

import Home from "./components/Home";
import Admin from "./components/Admin";
import Write from "./components/Write";
import Gnb from "./components/Gnb";

const store = createStore(rootReducer); // 스토어를 만듭니다.
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Gnb />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="home" element={<Home />} />
        <Route path="write" element={<Write />} />
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
