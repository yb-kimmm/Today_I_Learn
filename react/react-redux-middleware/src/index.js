import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "./modules";
// import myLogger from "./middleware/myLogger";
import logger from "redux-logger";
import { BrowserRouter } from "react-router-dom";

// Redux 개발자도구 익스텐션 활용
import { composeWithDevTools } from "redux-devtools-extension";
import ReduxThunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createBrowserHistory } from "history";

const sagaMiddleware = createSagaMiddleware({
  context: {
    history: createBrowserHistory(),
  },
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, sagaMiddleware, logger))
);

sagaMiddleware.run(rootSaga);

const root = ReactDOMClient.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
