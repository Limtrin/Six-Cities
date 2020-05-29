import * as React from "react";
import { connect } from "react-redux";
import { RentalOffersInterface } from "../types";
import { getRentalOffersCurrent } from "../reducer/selectors";
import Map from "./Map";
import Preloader from "./Preloader";
import Tabs from "./Tabs";
import OfferCardsList from "./OfferCardsList";
import Header from "./Header";

interface Props {
  rentalOffersCurrent: RentalOffersInterface,
}

const Main: React.FunctionComponent<Props> = (props: Props) => {

  const { rentalOffersCurrent }  = props;

  return (
    <div className="page page--gray page--main">
      <Header />
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
                      rentalOffers={rentalOffersCurrent}
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
