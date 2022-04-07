import React, { createContext, useReducer, useContext } from "react";
import axios from "axios";

const initialState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },
  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (e) => ({
  loading: false,
  data: null,
  error: e,
});

// GET_USERS
// GET_USERS_SUCCESS
// GET_USERS_ERROR
// GET_USER
// GET_USER_SUCCESS
// GET_USER_ERROR

function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: loadingState,
      };
    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };
    case "GET_USERS_ERROR":
      return {
        ...state,
        users: error(action.error),
      };

    case "GET_USER":
      return {
        ...state,
        users: loadingState,
      };
    case "GET_USER_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };
    case "GET_USER_ERROR":
      return {
        ...state,
        users: error(action.error),
      };

    default:
      throw new Error("Unhandled action type", action.type);
  }
}

const UsersStateContext = createContext(null);
const UsersDispatchContent = createContext(null);

export function UsersProvider({ children }) {
  const [state, dispatch] = useReducer(usersReducer, initialState);
  return (
    <UsersStateContext.Provider value={state}>
      <UsersDispatchContent.Provider value={dispatch}>
        {children}
      </UsersDispatchContent.Provider>
    </UsersStateContext.Provider>
  );
}

export function useUsersState() {
  const state = useContext(UsersStateContext);

  if (!state) {
    throw new Error("Cannot find UserProvider");
  }
  return state;
}

export function useUsersDispatch() {
  const dispatch = useContext(UsersDispatchContent);

  if (!dispatch) {
    throw new Error("Cannot find UserProvider");
  }
  return dispatch;
}

export async function getUsers(dispatch) {
  dispatch({ type: "GET_USERS" });

  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: "GET_USERS_SUCCESS",
      data: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USERS_ERROR",
      error: error,
    });
  }
}

export async function getUser(dispatch, id) {
  dispatch({ type: "GET_USER" });

  try {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    dispatch({
      type: "GET_USER_SUCCESS",
      data: response.data,
    });
  } catch (error) {
    dispatch({
      type: "GET_USER_ERROR",
      error: error,
    });
  }
}
