import {createReducer} from "@reduxjs/toolkit";
import {
  loadAnOffer,
  loadFavoriteOffers,
  loadNearby,
  loadOffers,
  loadReviews,
  setAuthorization,
  setAuthorizationInfo,
  setSendingReview, updateOffer
} from "../action";

const initialState = {
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

const updateOffers = (offers, action) => {
  const indexInOffers = offers.findIndex((offer) => offer.id === action.payload.id);
  const newOffers = [...offers];
  if (indexInOffers !== -1) {
    newOffers[indexInOffers] = action.payload;
  }
  return indexInOffers === -1 ? offers : newOffers;
};

const serverReducer = createReducer(initialState, (builder) => {
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
  builder.addCase(updateOffer, (state, action) => {
    state.offers = updateOffers(state.offers, action);
    state.favoriteOffers = updateOffers(state.favoriteOffers, action);
    if (action.payload[`is_favorite`]) {
      state.favoriteOffers.push(action.payload);
    } else {
      state.favoriteOffers.splice(state.favoriteOffers.findIndex((offer) => offer.id === action.payload.id), 1);
    }
    state.nearbyOffersForOpenedOffer = updateOffers(state.nearbyOffersForOpenedOffer, action);
  });
});

export {serverReducer};
