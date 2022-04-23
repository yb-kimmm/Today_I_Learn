import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import { Provider} from "react-redux";
import todos from "./modules/todos";
import { composeWithDevTools } from 'redux-devtools-extension';
import { restore} from "./modules/todos";

const store = createStore(todos , composeWithDevTools());

function loadData() {
  try {
    const data = localStorage.getIem("todo-app-data");
    console.log("loadData data" + data);

    if(!data)return;

    store.dispatch(restore(JSON.parse(data)));
  } catch (error) {
    console.log('localStorage is not working!')
  }
}

loadData();


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
