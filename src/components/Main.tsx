import * as React from "react";
import { connect } from "react-redux";
import { RentalOffersInterface } from "../types";
import { getRentalOffersCurrent } from "../reducer/selectors";
import Map from "./Map";
import Preloader from "./Preloader";
import Tabs from "./Tabs";
import OfferCardsList from "./OfferCardsList";

interface Props {
  rentalOffersCurrent: RentalOffersInterface,
}

const Main: React.FunctionComponent<Props> = (props: Props) => {

  const { rentalOffersCurrent }  = props;

  return (
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs />
        <div className="cities">
          <div className="cities__places-container container">
            {
              rentalOffersCurrent.length ?
              <>
                <OfferCardsList />
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      zoom={rentalOffersCurrent[0].city.location.zoom}
                      coordinates={rentalOffersCurrent.map((rentalOffer) => [rentalOffer.location.latitude, rentalOffer.location.longitude])}
                      center={[rentalOffersCurrent[0].city.location.latitude, rentalOffersCurrent[0].city.location.longitude]}
                    />
                  </section>
                </div>
              </> :
              <Preloader />
            }
          </div>
        </div>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  rentalOffersCurrent: getRentalOffersCurrent(state),
});

export default connect(mapStateToProps)(Main);
