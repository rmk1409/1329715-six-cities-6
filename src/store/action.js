import {createAction} from "@reduxjs/toolkit";

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
  LOAD_FAVORITE_OFFERS: `server/load-favorite-offers`,
  SET_SENDING_REVIEW: `server/set-sending-review`,
  UPDATE_OFFER: `server/update-offer`,
};

const setSendingReview = createAction(ActionType.SET_SENDING_REVIEW);
const setActiveCity = createAction(ActionType.SET_ACTIVE_CITY);
const setActiveSorting = createAction(ActionType.SET_ACTIVE_SORTING);
const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER_ID);
const resetMainPage = createAction(ActionType.RESET_MAIN_PAGE);
const loadOffers = createAction(ActionType.LOAD_OFFERS);
const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS);
const setAuthorization = createAction(ActionType.SET_AUTHORIZATION);
const setAuthorizationInfo = createAction(ActionType.SET_AUTHORIZATION_INFO);
const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE);
const loadAnOffer = createAction(ActionType.LOAD_OFFER);
const loadReviews = createAction(ActionType.LOAD_REVIEWS);
const loadNearby = createAction(ActionType.LOAD_NEARBY_OFFERS);
const updateOffer = createAction(ActionType.UPDATE_OFFER);

export {
  ActionType,
  setSendingReview,
  setActiveCity,
  setActiveSorting,
  setActiveOffer,
  resetMainPage,
  loadOffers,
  loadFavoriteOffers,
  setAuthorization,
  setAuthorizationInfo,
  redirectToRoute,
  loadAnOffer,
  loadReviews,
  loadNearby,
  updateOffer
};
