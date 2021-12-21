import Home from "./components/Home";
import React, { useEffect } from "react";
import axios from "./api";
import { useDispatch } from "react-redux";

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

      console.log(data);

      dispatch("SET_USER", data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <Home />
    </div>
  );
}

export default App;
