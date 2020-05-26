import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rentalOffers from "./mock/offers";
import { reducer } from "./reducer/reducer";
import { Provider } from "react-redux";
import { createStore } from "redux";

const store = createStore(reducer);

window.sasha = store;

ReactDOM.render(
  <Provider store={store}>
    <App rentalOffers={rentalOffers}/>
  </Provider>
  , document.getElementById(`root`)
);
