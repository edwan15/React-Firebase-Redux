import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Provider } from "react-redux";
import {store} from "./redux/store/Store"
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
      {/* <React.StrictMode> */}
      <BrowserRouter>
        <Layout>
          <App />
        </Layout>
      </BrowserRouter>
  {/* </React.StrictMode> */}
    </Provider>
);
