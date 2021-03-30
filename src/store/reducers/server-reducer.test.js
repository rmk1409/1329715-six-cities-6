import {initialState, serverReducer} from "./server-reducer";
import {
  loadAnOffer,
  loadFavoriteOffers, loadNearby,
  loadOffers,
  loadReviews,
  setAuthorization,
  setAuthorizationInfo, setSendingReview, updateOffer
} from "../action";

describe(`Reducers work correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(serverReducer(undefined, {})).toEqual(initialState);
  });

  it(`Reducer should set isUserAuthorized`, () => {
    const expectedUserAuthorized = true;
    const expectedState = {...initialState, isUserAuthorized: expectedUserAuthorized};
    expect(serverReducer(initialState, setAuthorization(expectedUserAuthorized))).toEqual(expectedState);
  });

  it(`Reducer should set user auth info`, () => {
    const expectedUserAuthInfo = {};
    const expectedState = {...initialState, authInfo: expectedUserAuthInfo};
    expect(serverReducer(initialState, setAuthorizationInfo(expectedUserAuthInfo))).toEqual(expectedState);
  });

  it(`Reducer should set offers`, () => {
    const expectedOffers = [];
    const expectedOffersLoaded = true;
    const expectedState = {...initialState, offers: expectedOffers, isOffersLoaded: expectedOffersLoaded};
    expect(serverReducer(initialState, loadOffers(expectedOffers))).toEqual(expectedState);
  });

  it(`Reducer should set favorite offers`, () => {
    const expectedFavoriteOffers = [];
    const expectedFavoriteOffersLoaded = true;
    const expectedState = {...initialState, favoriteOffers: expectedFavoriteOffers, isFavoriteOffersLoaded: expectedFavoriteOffersLoaded};
    expect(serverReducer(initialState, loadFavoriteOffers(expectedFavoriteOffers))).toEqual(expectedState);
  });

  it(`Reducer should set an offer`, () => {
    const expectedOffer = {};
    const expectedState = {...initialState, currentOpenOfferData: expectedOffer};
    expect(serverReducer(initialState, loadAnOffer(expectedOffer))).toEqual(expectedState);
  });

  it(`Reducer should set reviews`, () => {
    const expectedReviews = [];
    const expectedState = {...initialState, reviewsForOpenedOffer: expectedReviews};
    expect(serverReducer(initialState, loadReviews(expectedReviews))).toEqual(expectedState);
  });

  it(`Reducer should set nearby offers`, () => {
    const expectedNearbyOffers = [];
    const expectedState = {...initialState, nearbyOffersForOpenedOffer: expectedNearbyOffers};
    expect(serverReducer(initialState, loadNearby(expectedNearbyOffers))).toEqual(expectedState);
  });

  it(`Reducer should set sending review`, () => {
    const expectedSendingReview = true;
    const expectedState = {...initialState, isReviewSending: expectedSendingReview};
    expect(serverReducer(initialState, setSendingReview(expectedSendingReview))).toEqual(expectedState);
  });

  it(`Reducer should update an offer in all offers state`, () => {
    const updatedOffer = {id: 10, [`is_favorite`]: false};
    const offers = [{...updatedOffer, [`is_favorite`]: true}];
    const favoriteOffers = [{...updatedOffer}];
    const expectedFavoriteOffers = [];
    const expectedOffers = [{...updatedOffer}];
    const expectedState = {...initialState, offers: expectedOffers, favoriteOffers: expectedFavoriteOffers};
    expect(serverReducer({...initialState, offers, favoriteOffers}, updateOffer(updatedOffer))).toEqual(expectedState);
  });

  it(`Reducer should update an offer in nearby offers state`, () => {
    const updatedOffer = {id: 10, [`is_favorite`]: false};
    const nearbyOffersForOpenedOffer = [{...updatedOffer, [`is_favorite`]: true}];
    const favoriteOffers = [{...updatedOffer}];
    const expectedFavoriteOffers = [];
    const expectedNearbyOffers = [{...updatedOffer}];
    const expectedState = {...initialState, nearbyOffersForOpenedOffer: expectedNearbyOffers, favoriteOffers: expectedFavoriteOffers};
    expect(serverReducer({...initialState, nearbyOffersForOpenedOffer, favoriteOffers}, updateOffer(updatedOffer))).toEqual(expectedState);
  });

  it(`Reducer should update an offer in currentOpenOfferData state`, () => {
    const updatedOffer = {id: 10, [`is_favorite`]: false};
    const currentOpenOfferData = {...updatedOffer, [`is_favorite`]: true};
    const favoriteOffers = [{...updatedOffer}];
    const expectedFavoriteOffers = [];
    const expectedCurrentOpenOfferData = {...updatedOffer};
    const expectedState = {...initialState, currentOpenOfferData: expectedCurrentOpenOfferData, favoriteOffers: expectedFavoriteOffers};
    expect(serverReducer({...initialState, currentOpenOfferData, favoriteOffers}, updateOffer(updatedOffer))).toEqual(expectedState);
  });

  it(`Reducer should remove updated offer from favorites state`, () => {
    const updatedOffer = {id: 10, [`is_favorite`]: false};
    const favoriteOffers = [{...updatedOffer}];
    const expectedFavoriteOffers = [];
    const expectedState = {...initialState, favoriteOffers: expectedFavoriteOffers};
    expect(serverReducer({...initialState, favoriteOffers}, updateOffer(updatedOffer))).toEqual(expectedState);
  });

  it(`Reducer should add updated offer into favorites state`, () => {
    const updatedOffer = {id: 10, [`is_favorite`]: true};
    const favoriteOffers = [];
    const expectedFavoriteOffers = [{...updatedOffer}];
    const expectedState = {...initialState, favoriteOffers: expectedFavoriteOffers};
    expect(serverReducer({...initialState, favoriteOffers}, updateOffer(updatedOffer))).toEqual(expectedState);
  });
});
