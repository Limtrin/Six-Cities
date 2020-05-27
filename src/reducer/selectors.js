import { createSelector } from "reselect";

const getCurrentCity = state => state.currentCity;
const getRentalOffersList = state => state.rentalOffersList;
const getCurrentSortStatus = state => state.currentSortStatus;

export const getRentalOffersCurrent = createSelector(
  [getCurrentCity, getRentalOffersList],
  (currentCity, rentalOffersList) => {
    return rentalOffersList.filter((rentalOffer) => rentalOffer.city.name === currentCity);
  }
);

export const getRentalOffersCurrentSort = createSelector(
  [getCurrentCity, getRentalOffersList, getCurrentSortStatus],
  (currentCity, rentalOffersList, currentSortStatus) => {
    const currentRentalOffers = rentalOffersList.filter((rentalOffer) => rentalOffer.city.name === currentCity);
    switch (currentSortStatus) {
      case `Popular`:
        return currentRentalOffers;
      case `Price: low to high`:
        return currentRentalOffers.sort((a, b) => a.price - b.price);
      case `Price: high to low`:
        return currentRentalOffers.sort((a, b) => b.price - a.price);
      case `Top rated first`:
        return currentRentalOffers.sort((a, b) => b.rating - a.rating);
    }
  }
);
