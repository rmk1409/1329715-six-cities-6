import {
  checkAuth,
  fetchFavoriteOffers,
  fetchNearby,
  fetchOffer,
  fetchOffers,
  fetchReviews,
  login, postFavoriteHotel,
  postReview
} from "./api-action";
import {createAPI} from "../services/api";
import MockAdapter from "axios-mock-adapter";
import {ActionType} from "./action";

const api = createAPI(() => {
});

describe(`Api actions work correctly`, () => {
  it(`fetchOffers works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const action = fetchOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`fetchFavoriteOffers works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const action = fetchFavoriteOffers();

    apiMock
      .onGet(`/favorite`)
      .reply(200, [{fake: true}]);

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_FAVORITE_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`fetchReviews works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testId = 1;
    const action = fetchReviews(testId);

    apiMock
      .onGet(`/comments/${testId}`)
      .reply(200, [{fake: true}]);

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });

  it(`fetchNearby works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testId = 1;
    const action = fetchNearby(testId);

    apiMock
      .onGet(`/hotels/${testId}/nearby`)
      .reply(200, [{fake: true}]);

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_NEARBY_OFFERS,
          payload: [{fake: true}],
        });
      });
  });

  it(`fetchOffer works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testId = 1;
    const action = fetchOffer(testId);

    apiMock
      .onGet(`/hotels/${testId}`)
      .reply(200, {fake: true});

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFER,
          payload: {fake: true},
        });
      });
  });

  it(`checkAuth works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const action = checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, {fake: true});

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION,
          payload: true,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: {fake: true},
        });
      });
  });

  it(`login works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const loginInfo = {
      email: `email@gmail.com`,
      password: `password`,
    };

    const action = login(loginInfo);

    apiMock
      .onPost(`/login`)
      .reply(200, {fake: true});

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_AUTHORIZATION,
          payload: true,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTHORIZATION_INFO,
          payload: {fake: true},
        });
      });
  });

  it(`postReview works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testId = 1;
    const testComment = `some test comment`;
    const action = postReview(testId, testComment, ()=>{}, ()=>{});

    apiMock
      .onPost(`/comments/${testId}`)
      .reply(200, {fake: true});

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(3);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_SENDING_REVIEW,
          payload: true,
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.LOAD_REVIEWS,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(3, {
          type: ActionType.SET_SENDING_REVIEW,
          payload: false,
        });
      });
  });

  it(`postFavoriteHotel works correctly`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const testId = 1;
    const testStatus = 1;
    const action = postFavoriteHotel(testId, testStatus);

    apiMock
      .onPost(`/favorite/${testId}/${testStatus}`)
      .reply(200, {fake: true});

    return action(dispatch, () => {
    }, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.UPDATE_OFFER,
          payload: {fake: true},
        });
      });
  });
});
