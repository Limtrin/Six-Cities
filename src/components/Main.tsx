import * as React from "react";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { RentalOffersInterface } from "../types";
import Map from "./Map";
import OfferCard from "./OfferCard";
import Preloader from "./Preloader";
import Tabs from "./Tabs";

interface Props {
  rentalOffers: RentalOffersInterface,
  currentCity: string,
}

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const [isOpenedPlaces, setOpenedPlaces] = useState(false);

  const { rentalOffers, currentCity }  = props;
  const placesOptionsClasses = `places__options places__options--custom ${isOpenedPlaces ? `places__options--opened` : null}`;
  const rentalOffersByCity = rentalOffers.filter((rentalOffer) => rentalOffer.city.name === currentCity);

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
              props.rentalOffers.length ?
              <>
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{rentalOffersByCity.length} places to stay in {currentCity}</b>
                  <form className="places__sorting" action="#" method="get">
                    <span className="places__sorting-caption">Sort by</span>
                    <span
                      className="places__sorting-type"
                      tabIndex={0}
                      onClick={() => setOpenedPlaces(!isOpenedPlaces)}
                    >
                      Popular
                      <svg className="places__sorting-arrow" width="7" height="4">
                        <use xlinkHref="#icon-arrow-select"></use>
                      </svg>
                    </span>
                    <ul className={placesOptionsClasses}>
                      <li className="places__option places__option--active" tabIndex={0}>Popular</li>
                      <li className="places__option" tabIndex={0}>Price: low to high</li>
                      <li className="places__option" tabIndex={0}>Price: high to low</li>
                      <li className="places__option" tabIndex={0}>Top rated first</li>
                    </ul>
                    {/* <select className="places__sorting-type" id="places-sorting">
                      <option className="places__option" value="popular" selected="">Popular</option>
                      <option className="places__option" value="to-high">Price: low to high</option>
                      <option className="places__option" value="to-low">Price: high to low</option>
                      <option className="places__option" value="top-rated">Top rated first</option>
                    </select> */}
                  </form>
                  <div className="cities__places-list places__list tabs__content">
                    {rentalOffersByCity.map((rentalOffer) => (
                      <OfferCard
                        rentalOffer={rentalOffer}
                        type={`cities`}
                        key={rentalOffer.id}
                      />
                    ))}
                  </div>
                </section>
                <div className="cities__right-section">
                  <section className="cities__map map">
                    <Map
                      zoom={rentalOffersByCity[0].city.location.zoom}
                      coordinates={rentalOffersByCity.map((rentalOffer) => [rentalOffer.location.latitude, rentalOffer.location.longitude])}
                      center={[rentalOffersByCity[0].city.location.latitude, rentalOffersByCity[0].city.location.longitude]}
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
  currentCity: state.currentCity,
});

export default connect(mapStateToProps)(Main);
