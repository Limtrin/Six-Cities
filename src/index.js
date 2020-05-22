import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import rentalOffers from "./mock/offers";

ReactDOM.render(<App rentalOffers={rentalOffers}/>, document.getElementById(`root`));
