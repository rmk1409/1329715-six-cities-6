import {
  loadAnOffer,
  loadFavoriteOffers,
  loadNearby,
  loadOffers,
  loadReviews,
  resetMainPage,
  setActiveCity,
  setActiveOffer,
  setActiveSorting,
  setAuthorization,
  setAuthorizationInfo,
  setSendingReview
} from "./action";
import {City, SortOption} from "../const";
import {createReducer} from "@reduxjs/toolkit";

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

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(resetMainPage, (state) => {
    state.activeCity = initialState.activeCity;
    state.activeSorting = initialState.activeSorting;
  });
  builder.addCase(setActiveCity, (state, action) => {
    state.activeCity = action.payload;
  });
  builder.addCase(setActiveSorting, (state, action) => {
    state.activeSorting = action.payload;
  });
  builder.addCase(setActiveOffer, (state, action) => {
    state.activeOfferId = action.payload;
  });
  builder.addCase(setAuthorization, (state, action) => {
    state.isUserAuthorized = action.payload;
  });
  builder.addCase(setAuthorizationInfo, (state, action) => {
    state.authInfo = action.payload;
  });
  builder.addCase(loadOffers, (state, action) => {
    state.offers = action.payload;
    state.isOffersLoaded = true;
  });
  builder.addCase(loadFavoriteOffers, (state, action) => {
    state.favoriteOffers = action.payload;
    state.isFavoriteOffersLoaded = true;
  });
  builder.addCase(loadAnOffer, (state, action) => {
    state.currentOpenOfferData = action.payload;
  });
  builder.addCase(loadReviews, (state, action) => {
    state.reviewsForOpenedOffer = action.payload;
  });
  builder.addCase(loadNearby, (state, action) => {
    state.nearbyOffersForOpenedOffer = action.payload;
  });
  builder.addCase(setSendingReview, (state, action) => {
    state.isReviewSending = action.payload;
  });
});

export {reducer};
