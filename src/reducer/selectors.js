export const getRentalOffersCurrent = (state) => {
  const currentCity = state.currentCity;
  return state.rentalOffersList.filter((rentalOffer) => rentalOffer.city.name === currentCity);
};
