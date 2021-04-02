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
import {Routing} from "../const";

const api = createAPI(() => {
});

let apiMock;
let dispatch;

describe(`Api actions work correctly`, () => {
  beforeEach(() => {
    apiMock = new MockAdapter(api);
    dispatch = jest.fn();
  });

  it(`fetchOffers works correctly`, () => {
    const action = fetchOffers();

    apiMock
      .onGet(Routing.HOTELS)
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
    const action = fetchFavoriteOffers();

    apiMock
      .onGet(Routing.FAVORITE)
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
    const testId = 1;
    const action = fetchReviews(testId);

    apiMock
      .onGet(`${Routing.COMMENTS}/${testId}`)
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
    const testId = 1;
    const action = fetchNearby(testId);

    apiMock
      .onGet(`${Routing.HOTELS}/${testId}/nearby`)
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
    const testId = 1;
    const action = fetchOffer(testId);

    apiMock
      .onGet(`${Routing.HOTELS}/${testId}`)
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
    const action = checkAuth();

    apiMock
      .onGet(Routing.LOGIN)
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
    const loginInfo = {
      email: `email@gmail.com`,
      password: `password`,
    };

    const action = login(loginInfo);

    apiMock
      .onPost(Routing.LOGIN)
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
    const testId = 1;
    const testComment = `some test comment`;
    const action = postReview(testId, testComment, () => {
    }, () => {
    });

    apiMock
      .onPost(`${Routing.COMMENTS}/${testId}`)
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
    const testId = 1;
    const testStatus = 1;
    const action = postFavoriteHotel(testId, testStatus);

    apiMock
      .onPost(`${Routing.FAVORITE}/${testId}/${testStatus}`)
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
