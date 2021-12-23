import Home from "./components/Home";
import React, { useEffect } from "react";
import axios from "./api";
import { useDispatch } from "react-redux";
import { setUser } from "./store/user";

function App() {
  const dispatch = useDispatch();

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      const data = await axios({
        url: "/user/token",
        method: "get",
      });

      const user = {
        email: data.email,
        authYn: data.authYn,
        nickname: data.nickname,
      };

      dispatch(setUser(user, token));
    } catch (e) {}
  };

  useEffect(() => {
    fetchUsers();
  });

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
