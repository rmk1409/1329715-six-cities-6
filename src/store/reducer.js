import {offers as offersMock} from "../mocks/offers";
import {ActionType} from "./action";
import {cities, SortOption} from "../const";

const initialState = {
  activeCity: cities[0],
  activeSorting: SortOption.POPULAR,
  offers: offersMock,
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
  }

  return newState;
};

export {reducer};
