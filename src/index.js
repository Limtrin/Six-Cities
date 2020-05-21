import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const rentalOffers = [
  {
    name: `Beautiful & luxurious apartment at great location`,
    type: `Apartment`,
    image: `img/apartment-01.jpg`,
    price: 120,
    rating: 4,
    isPremium: true,
    inBookmarks: false,
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    image: `img/room.jpg`,
    price: 80,
    rating: 4,
    isPremium: false,
    inBookmarks: true,
  },
  {
    name: `Canal View Prinsengracht`,
    type: `Apartment`,
    image: `img/apartment-02.jpg`,
    price: 132,
    rating: 4,
    isPremium: false,
    inBookmarks: false,
  },
  {
    name: `Nice, cozy, warm big bed apartment`,
    type: `Apartment`,
    image: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    isPremium: true,
    inBookmarks: false,
  },
  {
    name: `Wood and stone place`,
    type: `Private room`,
    image: `img/apartment-01.jpg`,
    price: 80,
    rating: 4,
    isPremium: false,
    inBookmarks: true,
  }
]

ReactDOM.render(<App rentalOffers={rentalOffers}/>, document.getElementById(`root`));
