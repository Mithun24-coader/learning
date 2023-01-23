import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
