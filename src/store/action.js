const ActionType = {
  SET_ACTIVE_CITY: `client/set-active-city`,
  RESET_ACTIVE_CITY: `client/reset-active-city`,
};

const ActionCreator = {
  setActiveCity(newActiveCity) {
    return {
      type: ActionType.SET_ACTIVE_CITY,
      payload: newActiveCity,
    };
  },
  resetActiveCity() {
    return {
      type: ActionType.RESET_ACTIVE_CITY
    };
  },
};

export {ActionType, ActionCreator};
