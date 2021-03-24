const ActionType = {
  RESET_MAIN_PAGE: `client/reset-main-page`,
  SET_ACTIVE_CITY: `client/set-active-city`,
  SET_ACTIVE_SORTING: `client/set-active-sorting`,
  SET_ACTIVE_OFFER_ID: `client/set-active-offer-id`,
  LOAD_OFFERS: `server/load-offers`,
  SET_AUTHORIZATION: `server/set-authorization`,
  SET_AUTHORIZATION_INFO: `server/set-authorization-info`,
  REDIRECT_TO_ROUTE: `client/redirect-to-route`,
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
  setActiveOffer(newActiveOfferId) {
    return {
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: newActiveOfferId,
    };
  },
  resetMainPage() {
    return {
      type: ActionType.RESET_MAIN_PAGE,
    };
  },
  loadOffers(offers) {
    return {
      type: ActionType.LOAD_OFFERS,
      payload: offers,
    };
  },
  setAuthorization(authorizationStatus) {
    return {
      type: ActionType.SET_AUTHORIZATION,
      payload: authorizationStatus,
    };
  },
  setAuthorizationInfo(authorizationInfo) {
    return {
      type: ActionType.SET_AUTHORIZATION_INFO,
      payload: authorizationInfo,
    };
  },
  redirectToRoute(url) {
    return {
      type: ActionType.REDIRECT_TO_ROUTE,
      payload: url
    };
  }
};

export {ActionType, ActionCreator};
