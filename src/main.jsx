import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.jsx";

import "./_global.scss";
import "./theme.scss";
import { LoggedInProvider } from "./context/LogedContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LoggedInProvider>
      <AdminProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AdminProvider>
    </LoggedInProvider>
  </React.StrictMode>
);
