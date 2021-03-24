import {ActionType} from "./action";
import {City, SortOption} from "../const";

const initialState = {
  activeOfferId: -1,
  activeCity: City.PARIS.name,
  activeSorting: SortOption.POPULAR,
  offers: [],
  isOffersLoaded: false,
};

const reducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case ActionType.RESET_MAIN_PAGE:
      newState = {...initialState};
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
    case ActionType.LOAD_OFFERS:
      newState = {...state, offers: action.payload, isOffersLoaded: true};
      break;
  }

  return newState;
};

export {reducer};
