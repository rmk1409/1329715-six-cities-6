import {
  ActionType, loadAnOffer, loadFavoriteOffers, loadNearby,
  loadOffers, loadReviews,
  redirectToRoute,
  resetMainPage,
  setActiveCity,
  setActiveOffer,
  setActiveSorting, setAuthorization, setAuthorizationInfo, setSendingReview, updateOffer
} from "./action";

describe(`Action creators work correctly`, () => {
  it(`Action creator for reset main page returns correct action`, () => {
    const expectedAction = {
      type: ActionType.RESET_MAIN_PAGE
    };
    expect(resetMainPage()).toEqual(expectedAction);
  });

  it(`Action creator for set active city returns correct action`, () => {
    const expectedCity = `expected-city`;
    const expectedAction = {
      type: ActionType.SET_ACTIVE_CITY,
      payload: expectedCity
    };
    expect(setActiveCity(expectedCity)).toEqual(expectedAction);
  });

  it(`Action creator for set active sorting returns correct action`, () => {
    const expectedSorting = `expected-sorting`;
    const expectedAction = {
      type: ActionType.SET_ACTIVE_SORTING,
      payload: expectedSorting
    };
    expect(setActiveSorting(expectedSorting)).toEqual(expectedAction);
  });

  it(`Action creator for set active offer id returns correct action`, () => {
    const expectedOfferId = 43;
    const expectedAction = {
      type: ActionType.SET_ACTIVE_OFFER_ID,
      payload: expectedOfferId
    };
    expect(setActiveOffer(expectedOfferId)).toEqual(expectedAction);
  });

  it(`Action creator for redirect to route returns correct action`, () => {
    const expectedAction = {
      type: ActionType.REDIRECT_TO_ROUTE,
    };
    expect(redirectToRoute()).toEqual(expectedAction);
  });

  it(`Action creator for load offers returns correct action`, () => {
    const expectedOffers = [];
    const expectedAction = {
      type: ActionType.LOAD_OFFERS,
      payload: expectedOffers,
    };
    expect(loadOffers(expectedOffers)).toEqual(expectedAction);
  });

  it(`Action creator for set authorization returns correct action`, () => {
    const expectedAuthorization = true;
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION,
      payload: expectedAuthorization,
    };
    expect(setAuthorization(expectedAuthorization)).toEqual(expectedAction);
  });

  it(`Action creator for set authorization info returns correct action`, () => {
    const expectedAuthorizationInfo = {};
    const expectedAction = {
      type: ActionType.SET_AUTHORIZATION_INFO,
      payload: expectedAuthorizationInfo,
    };
    expect(setAuthorizationInfo(expectedAuthorizationInfo)).toEqual(expectedAction);
  });

  it(`Action creator for load an offer returns correct action`, () => {
    const expectedOffer = {};
    const expectedAction = {
      type: ActionType.LOAD_OFFER,
      payload: expectedOffer,
    };
    expect(loadAnOffer(expectedOffer)).toEqual(expectedAction);
  });

  it(`Action creator for load reviews returns correct action`, () => {
    const expectedReviews = [];
    const expectedAction = {
      type: ActionType.LOAD_REVIEWS,
      payload: expectedReviews,
    };
    expect(loadReviews(expectedReviews)).toEqual(expectedAction);
  });

  it(`Action creator for load nearby offers returns correct action`, () => {
    const expectedOffers = [];
    const expectedAction = {
      type: ActionType.LOAD_NEARBY_OFFERS,
      payload: expectedOffers,
    };
    expect(loadNearby(expectedOffers)).toEqual(expectedAction);
  });

  it(`Action creator for load favorite offers returns correct action`, () => {
    const expectedFavoriteOffers = [];
    const expectedAction = {
      type: ActionType.LOAD_FAVORITE_OFFERS,
      payload: expectedFavoriteOffers,
    };
    expect(loadFavoriteOffers(expectedFavoriteOffers)).toEqual(expectedAction);
  });

  it(`Action creator for set sending review returns correct action`, () => {
    const expectedSendingReview = true;
    const expectedAction = {
      type: ActionType.SET_SENDING_REVIEW,
      payload: expectedSendingReview,
    };
    expect(setSendingReview(expectedSendingReview)).toEqual(expectedAction);
  });

  it(`Action creator for offer updating returns correct action`, () => {
    const expectedOffer = true;
    const expectedAction = {
      type: ActionType.UPDATE_OFFER,
      payload: expectedOffer,
    };
    expect(updateOffer(expectedOffer)).toEqual(expectedAction);
  });
});
