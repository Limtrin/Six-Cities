const initialState = {
  currentCity: `Amsterdam`,
  rentalOffersList: [],
  nearbyOffersList: [],
  reviewsList: [],
  focusCityLocation: [],
}

const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  SET_RENTAL_OFFERS_LIST: `SET_RENTAL_OFFERS_LIST`,
  SET_NEARBY_OFFERS_LIST: `SET_NEARBY_OFFERS_LIST`,
  SET_REVIEWS_LIST: `SET_REVIEWS_LIST`,
  SET_FOCUS_CITY_LOCATION: `SET_FOCUS_CITY_LOCATION`,
}

const ActionCreator = {
  changeCurrentCity: (city) => ({
    type: ActionType.CHANGE_CURRENT_CITY,
    payload: city,
  }),

  setRentalOffersList: (offersList) => ({
    type: ActionType.SET_RENTAL_OFFERS_LIST,
    payload: offersList,
  }),

  setNearbyOffersList: (offersList) => ({
    type: ActionType.SET_NEARBY_OFFERS_LIST,
    payload: offersList,
  }),

  setReviewsList: (reviewsList) => ({
    type: ActionType.SET_REVIEWS_LIST,
    payload: reviewsList,
  }),

  setFocusCityLocation: (focusCityLocation) => ({
    type: ActionType.SET_FOCUS_CITY_LOCATION,
    payload: focusCityLocation,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CURRENT_CITY:
      return {...state, currentCity: action.payload};
    case ActionType.SET_RENTAL_OFFERS_LIST:
      return {...state, rentalOffersList: action.payload};
    case ActionType.SET_NEARBY_OFFERS_LIST:
      return {...state, nearbyOffersList: action.payload};
    case ActionType.SET_REVIEWS_LIST:
      return {...state, reviewsList: action.payload};
    case ActionType.SET_FOCUS_CITY_LOCATION:
      return {...state, focusCityLocation: action.payload};
  }

  return state;
};

export {reducer, ActionType, ActionCreator};
