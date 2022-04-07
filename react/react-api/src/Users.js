import React, { useReducer, useEffect } from "react";
import axios from "axios";

// LOADING , SUCCESS , ERROR
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    default:
      throw new Error(`Unhandled action type : ${action.type} `);
  }
}

function Users() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null,
  });
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    dispatch({ type: "LOADING" });

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users/"
      );
      dispatch({ type: "SUCCESS", data: response.data });
    } catch (error) {
      dispatch({ type: "ERROR", error: error });
    }
  };

  const { loading, data, error } = state;

  if (loading) return <div>로딩중...</div>;
  if (error) return <div> 에러 발생 </div>;
  if (!data) return null;

  return (
    <>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
