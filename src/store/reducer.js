import {offers as offersMock} from "../mocks/offers";
import {ActionType} from "./action";

const initialState = {
  activeCity: `Paris`,
  offers: offersMock,
};

const reducer = (state = initialState, action) => {
  let newState = {...state};
  switch (action.type) {
    case ActionType.SET_ACTIVE_CITY:
      newState = {...state, activeCity: action.payload};
      break;
    case ActionType.RESET_ACTIVE_CITY:
      newState = {...state, activeCity: initialState.activeCity};
      break;
  }

  return newState;
};

export {reducer};
