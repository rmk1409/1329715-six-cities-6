const ActionType = {
  RESET_MAIN_PAGE: `client/reset-main-page`,
  SET_ACTIVE_CITY: `client/set-active-city`,
  SET_ACTIVE_SORTING: `client/set-active-sorting`,
};

const ActionCreator = {
  setActiveCity(newActiveCity) {
    return {
      type: ActionType.SET_ACTIVE_CITY,
      payload: newActiveCity,
    };
  },
  setActiveSorting(newActiveSorting) {
    return {
      type: ActionType.SET_ACTIVE_SORTING,
      payload: newActiveSorting,
    };
  },
  resetMainPage() {
    return {
      type: ActionType.RESET_MAIN_PAGE
    };
  },
};

export {ActionType, ActionCreator};
