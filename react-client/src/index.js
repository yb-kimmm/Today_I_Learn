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
import api from "./api";

async function initLogin() {
  const token = localStorage.getItem("token");
  if (!token) return;

  const data = await api({
    url: "/user/token",
    method: "get",
  });

  if (!data.email) {
    return;
  }

  this.$store.commit("SET_USER", {
    email: data.email,
    nickname: data.nickname,
    authYn: data.authYn,
    token: token,
  });
}

createStore(rootReducer); // 스토어를 만듭니다.

initLogin();
// React.prototype.$api = api;

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
