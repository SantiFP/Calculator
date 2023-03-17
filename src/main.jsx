import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CalcProvider from "./store/logic-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CalcProvider>
      <App />
    </CalcProvider>
  </React.StrictMode>
);
