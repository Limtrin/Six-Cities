const initialState = {
  currentCity: `Amsterdam`,
  rentalOffersList: [],
  nearbyOffersList: [],
  reviewsList: [],
  focusCityLocation: [],
  currentSortStatus: `Popular`,
  isLogin: false,
  favoritesOffersList: [],
}

const ActionType = {
  CHANGE_CURRENT_CITY: `CHANGE_CURRENT_CITY`,
  SET_RENTAL_OFFERS_LIST: `SET_RENTAL_OFFERS_LIST`,
  SET_NEARBY_OFFERS_LIST: `SET_NEARBY_OFFERS_LIST`,
  SET_REVIEWS_LIST: `SET_REVIEWS_LIST`,
  SET_FOCUS_CITY_LOCATION: `SET_FOCUS_CITY_LOCATION`,
  SET_CURRENT_SORT_STATUS: `SET_CURRENT_SORT_STATUS`,
  SET_LOGIN_STATUS: `SET_LOGIN_STATUS`,
  SET_FAVORITES_OFFERS_LIST: `SET_FAVORITES_OFFERS_LIST`,
  CHANGE_FAVORITE_OFFER_STATUS: `CHANGE_FAVORITE_OFFER_STATUS`,
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

  seCurrentSortStatus: (sortStatus) => ({
    type: ActionType.SET_CURRENT_SORT_STATUS,
    payload: sortStatus,
  }),

  setLoginStatus: (loginStatus) => ({
    type: ActionType.SET_LOGIN_STATUS,
    payload: loginStatus,
  }),

  setFavoritesOffersList: (favoritesOffers) => ({
    type: ActionType.SET_FAVORITES_OFFERS_LIST,
    payload: favoritesOffers,
  }),

  changeFavoriteOfferStatus: (offerId) => ({
    type: ActionType.CHANGE_FAVORITE_OFFER_STATUS,
    payload: offerId,
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
    case ActionType.SET_CURRENT_SORT_STATUS:
      return {...state, currentSortStatus: action.payload};
    case ActionType.SET_LOGIN_STATUS:
      return {...state, isLogin: action.payload};
    case ActionType.SET_FAVORITES_OFFERS_LIST:
      return {...state, favoritesOffersList: action.payload};
    case ActionType.CHANGE_FAVORITE_OFFER_STATUS:
      return {...state, rentalOffersList: [...state.rentalOffersList.map((offer) => {
          if (offer.id === action.payload) {
            offer.is_favorite = !offer.is_favorite;
          }
          return offer;
        })]
      }
  }
  return state;
};

export {reducer, ActionType, ActionCreator};
