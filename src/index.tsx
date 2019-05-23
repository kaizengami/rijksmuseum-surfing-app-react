import React from "react";
import ReactDOM from "react-dom";
import App from "./components/AppContainer";
import { BrowserRouter } from "react-router-dom";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
