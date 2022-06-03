import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import store from "./Store";

import { Provider as ReduxProvider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

import { Contextprovider } from "./components/Context/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <Contextprovider>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ReduxProvider>
    </Contextprovider>
  </React.StrictMode>,
  document.getElementById("root")
);
