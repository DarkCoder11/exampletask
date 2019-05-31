import "./index.css";

import React from "react";
import ReactDOM from "react-dom";
import { register } from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import App from "./components/containers/App/App";

const wrapper = document.getElementById("root");

register();
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  wrapper
);
