import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./redux/store";

export const AppContainer = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
