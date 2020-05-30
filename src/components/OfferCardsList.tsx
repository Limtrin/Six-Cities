import * as React from "react";
import { connect } from "react-redux";
import { RentalOffersInterface } from "../types";
import { getRentalOffersCurrentSort } from "../reducer/selectors";
import OfferCard from "./OfferCard";
import Sort from "./Sort";

interface Props {
  currentCity: string,
  rentalOffersCurrentSort: RentalOffersInterface,
}

const Main: React.FunctionComponent<Props> = (props: Props) => {

  const { rentalOffersCurrentSort, currentCity }  = props;

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{rentalOffersCurrentSort.length} places to stay in {currentCity}</b>
      <Sort />
      <div className="cities__places-list places__list tabs__content">
        {rentalOffersCurrentSort.map((rentalOffer) => (
          <OfferCard
            rentalOffer={rentalOffer}
            type={`cities`}
            key={rentalOffer.id}
          />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  rentalOffersCurrentSort: getRentalOffersCurrentSort(state),
});

export default connect(mapStateToProps)(Main);
