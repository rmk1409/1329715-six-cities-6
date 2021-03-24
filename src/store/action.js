const ActionType = {
  RESET_MAIN_PAGE: `client/reset-main-page`,
  SET_ACTIVE_CITY: `client/set-active-city`,
  SET_ACTIVE_SORTING: `client/set-active-sorting`,
  SET_ACTIVE_OFFER_ID: `client/set-active-offer-id`,
  REDIRECT_TO_ROUTE: `client/redirect-to-route`,
  LOAD_OFFERS: `server/load-offers`,
  SET_AUTHORIZATION: `server/set-authorization`,
  SET_AUTHORIZATION_INFO: `server/set-authorization-info`,
  LOAD_OFFER: `server/load-offer`,
  LOAD_REVIEWS: `server/load-reviews-for-offer`,
  LOAD_NEARBY_OFFERS: `server/load-nearby-offers`,
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
      payload: url,
    };
  },
  loadAnOffer(offer) {
    return {
      type: ActionType.LOAD_OFFER,
      payload: offer,
    };
  },
  loadReviews(reviews) {
    return {
      type: ActionType.LOAD_REVIEWS,
      payload: reviews,
    };
  },
  loadNearby(nearbyOffers) {
    return {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: nearbyOffers,
    };
  },
};

export {ActionType, ActionCreator};
