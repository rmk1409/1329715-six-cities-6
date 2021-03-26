import {createReducer} from "@reduxjs/toolkit";
import {
  loadAnOffer,
  loadFavoriteOffers,
  loadNearby,
  loadOffers,
  loadReviews,
  setAuthorization,
  setAuthorizationInfo,
  setSendingReview
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
});

export {serverReducer};
