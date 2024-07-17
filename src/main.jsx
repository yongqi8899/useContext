import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { LocalisationProvider } from "@/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthenticationProvider> */}
      <LocalisationProvider>
        <App />
      </LocalisationProvider>
    {/* </AuthenticationProvider> */}
  </React.StrictMode>
);
