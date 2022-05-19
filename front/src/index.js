import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import store from "./Store";

import { Provider as ReduxProvider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <ReduxProvider store={store} >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
