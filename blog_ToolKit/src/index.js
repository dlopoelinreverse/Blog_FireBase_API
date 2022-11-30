import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.scss";
import App from "./App";
// redux
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* provider qui lui fournit le store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
