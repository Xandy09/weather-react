import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Weather from "./Weather";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Weather />
    <App />
  </StrictMode>,
  rootElement
);
