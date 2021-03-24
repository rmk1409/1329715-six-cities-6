import {ActionType} from "./action";
import {City, SortOption} from "../const";

const initialState = {
  activeOfferId: -1,
  activeCity: City.PARIS.name,
  activeSorting: SortOption.POPULAR,
  offers: [],
  favoriteOffers: [],
  isOffersLoaded: false,
  isFavoriteOffersLoaded: false,
  isUserAuthorized: false,
  isReviewSending: false,
  authInfo: {
    email: ``,
  },
  currentOpenOfferData: null,
  reviewsForOpenedOffer: [],
  nearbyOffersForOpenedOffer: [],
};

const reducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case ActionType.RESET_MAIN_PAGE:
      newState = {...state, activeCity: initialState.activeCity, activeSorting: initialState.activeSorting};
      break;
    case ActionType.SET_ACTIVE_CITY:
      newState = {...state, activeCity: action.payload};
      break;
    case ActionType.SET_ACTIVE_SORTING:
      newState = {...state, activeSorting: action.payload};
      break;
    case ActionType.SET_ACTIVE_OFFER_ID:
      newState = {...state, activeOfferId: action.payload};
      break;
    case ActionType.SET_AUTHORIZATION:
      newState = {...state, isUserAuthorized: action.payload};
      break;
    case ActionType.SET_AUTHORIZATION_INFO:
      newState = {...state, authInfo: action.payload};
      break;
    case ActionType.LOAD_OFFERS:
      newState = {...state, offers: action.payload, isOffersLoaded: true};
      break;
    case ActionType.LOAD_FAVORITE_OFFERS:
      newState = {...state, favoriteOffers: action.payload, isFavoriteOffersLoaded: true};
      break;
    case ActionType.LOAD_OFFER:
      newState = {...state, currentOpenOfferData: action.payload};
      break;
    case ActionType.LOAD_REVIEWS:
      newState = {...state, reviewsForOpenedOffer: action.payload};
      break;
    case ActionType.LOAD_NEARBY_OFFERS:
      newState = {...state, nearbyOffersForOpenedOffer: action.payload};
      break;
    case ActionType.SET_SENDING_REVIEW:
      newState = {...state, isReviewSending: action.payload};
      break;
  }

  return newState;
};

export {reducer};
