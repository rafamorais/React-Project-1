import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/general.css";
import Home from "./templates/Home/Home";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
