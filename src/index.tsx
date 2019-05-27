import React from "react";
import ReactDOM from "react-dom";
import App from "./components/AppContainer";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { watchFetchCollection } from "sagas/sagas";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";

const sagaMiddleware = createSagaMiddleware();

export const store: any = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
  // (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
  //   (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

sagaMiddleware.run(watchFetchCollection);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
