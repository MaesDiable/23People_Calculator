import React from "react";
import ReactDOM from "react-dom";
import Calculator from "./components/Calculator";

ReactDOM.render(
  <React.StrictMode>
    <Calculator initialValue="0" />
  </React.StrictMode>,
  document.getElementById("root")
);
