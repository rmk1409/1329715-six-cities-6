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
};

const setSendingReview = createAction(ActionType.SET_SENDING_REVIEW, (isSendingReview) => ({payload: isSendingReview}));
const setActiveCity = createAction(ActionType.SET_ACTIVE_CITY, (newActiveCity) => ({payload: newActiveCity}));
const setActiveSorting = createAction(ActionType.SET_ACTIVE_SORTING, (newActiveSorting) => ({payload: newActiveSorting}));
const setActiveOffer = createAction(ActionType.SET_ACTIVE_OFFER_ID, (newActiveOfferId) => ({payload: newActiveOfferId}));
const resetMainPage = createAction(ActionType.RESET_MAIN_PAGE);
const loadOffers = createAction(ActionType.LOAD_OFFERS, (offers) => ({payload: offers}));
const loadFavoriteOffers = createAction(ActionType.LOAD_FAVORITE_OFFERS, (offers) => ({payload: offers}));
const setAuthorization = createAction(ActionType.SET_AUTHORIZATION, (authorizationStatus) => ({payload: authorizationStatus}));
const setAuthorizationInfo = createAction(ActionType.SET_AUTHORIZATION_INFO, (authorizationInfo) => ({payload: authorizationInfo}));
const redirectToRoute = createAction(ActionType.REDIRECT_TO_ROUTE, (url) => ({payload: url}));
const loadAnOffer = createAction(ActionType.LOAD_OFFER, (offer) => ({payload: offer}));
const loadReviews = createAction(ActionType.LOAD_REVIEWS, (reviews) => ({payload: reviews}));
const loadNearby = createAction(ActionType.LOAD_NEARBY_OFFERS, (nearbyOffers) => ({payload: nearbyOffers}));

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
  loadNearby
};
