import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap-css-only/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "mdbreact/dist/css/mdb.css";
import "font-awesome/css/font-awesome.min.css";
import store from "./Store/Store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,

  document.getElementById("root")
);
