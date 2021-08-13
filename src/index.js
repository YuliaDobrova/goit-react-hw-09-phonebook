import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "modern-normalize/modern-normalize.css";
import Loader from "react-loader-spinner";
import { PersistGate } from "redux-persist/integration/react";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate
        loading={
          <Loader type="ThreeDots" color="#40e0d0" height={70} width={70} />
        }
        persistor={store.persistor}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,

  document.getElementById("root")
);
