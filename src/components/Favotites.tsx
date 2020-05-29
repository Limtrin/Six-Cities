import * as React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { useEffect } from "react";
import { RentalOffersInterface } from "../types";
import { ActionCreator } from "../reducer/reducer";
import Header from "./Header";
import OfferCard from "./OfferCard";

interface Props {
  favoritesOffersList: RentalOffersInterface,
  rentalOffersList: RentalOffersInterface,
  setFavoritesOffersList: (offersList: Object) => void
}

const Favorites: React.FunctionComponent<Props> = (props: Props) => {

  useEffect(() => {
    axios.get(`https://htmlacademy-react-3.appspot.com/six-cities/favorite`, {withCredentials: true}).then((response) => {
      if (response.status === 200) {
        props.setFavoritesOffersList(response.data);
      }
    });  
  },[props.rentalOffersList])

  const favotitesCities = props.favoritesOffersList.length ? Array.from(new Set(props.favoritesOffersList.map((offer) => offer.city.name))) : [];

  return (
    <div className="page">
      <Header />
      {
        props.favoritesOffersList.length ?
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <ul className="favorites__list">
                {
                  favotitesCities.map((favotiteCity, index) => (
                    <li
                      className="favorites__locations-items"
                      key={index}
                    >
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <a className="locations__item-link" href="#">
                            <span>{favotiteCity}</span>
                          </a>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {
                          props.favoritesOffersList.filter((offer) => offer.city.name === favotiteCity).map((offer) => (
                            <OfferCard
                              rentalOffer={offer}
                              type={`cities`}
                              key={offer.id}
                              isFavorite={offer.is_favorite}
                            />
                          ))
                        }
                      </div>
                    </li>
                  ))
                }
              </ul>
            </section>
          </div>
        </main> :
        <main className="page__main page__main--favorites page__main--favorites-empty">
          <div className="page__favorites-container container">
            <section className="favorites favorites--empty">
              <h1 className="visually-hidden">Favorites (empty)</h1>
              <div className="favorites__status-wrapper">
                <b className="favorites__status">Nothing yet saved.</b>
                <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
              </div>
            </section>
          </div>
        </main>
      }
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="/img/logo.svg" alt="6 cities logo" width="64" height="33" />
        </a>
      </footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  favoritesOffersList:state.favoritesOffersList,
  rentalOffersList: state.rentalOffersList,
});

const mapDispatchToProps = (dispatch) => ({
  setFavoritesOffersList: (offersList) => {
    dispatch(ActionCreator.setFavoritesOffersList(offersList));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
