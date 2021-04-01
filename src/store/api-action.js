import {
  loadAnOffer,
  loadFavoriteOffers,
  loadNearby,
  loadOffers,
  loadReviews, redirectToRoute,
  setAuthorization,
  setAuthorizationInfo, setSendingReview, updateOffer,
} from "./action";
import {Routing} from "../const";

const fetchOffers = () => (dispatch, _getState, api) => {
  return api.get(Routing.HOTELS)
    .then(({data}) => dispatch(loadOffers(data)));
};

const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  return api.get(Routing.FAVORITE)
    .then(({data}) => dispatch(loadFavoriteOffers(data)));
};

const fetchReviews = (id) => (dispatch, _getState, api) => {
  return api.get(`${Routing.COMMENTS}/${id}`)
    .then(({data}) => dispatch(loadReviews(data)));
};

const fetchNearby = (id) => (dispatch, _getState, api) => {
  return api.get(`${Routing.HOTELS}/${id}/nearby`)
    .then(({data}) => dispatch(loadNearby(data)));
};

const fetchOffer = (id) => (dispatch, _getState, api) => {
  return api.get(`${Routing.HOTELS}/${id}`)
    .then(({data}) => dispatch(loadAnOffer(data)))
    .catch(() => dispatch(loadAnOffer({id: -1})));
};

const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(Routing.LOGIN)
    .then(({data}) => {
      dispatch(setAuthorization(true));
      dispatch(setAuthorizationInfo(data));
    })
    .then(() => redirectToRoute(Routing.ROOT))
    .catch(() => {
    });
};

const login = ({login: email, password}, errorCb) => (dispatch, _getState, api) => {
  return api.post(Routing.LOGIN, {email, password})
    .then(({data}) => {
      dispatch(setAuthorization(true));
      dispatch(setAuthorizationInfo(data));
    }).catch((err) => {
      errorCb(err);
    });
};

const postReview = (id, comment, successCb, errorCb) => (dispatch, _getState, api) => {
  return new Promise((resolve) => {
    dispatch(setSendingReview(true));
    resolve();
  }).then(() => {
    return api.post(`${Routing.COMMENTS}/${id}`, comment);
  }).then(({data}) => {
    dispatch(loadReviews(data));
    successCb();
  }).catch((err) => {
    errorCb(err);
  }).finally(() => {
    dispatch(setSendingReview(false));
  });
};

const postFavoriteHotel = (id, status) => (dispatch, _getState, api) => {
  return api.post(`${Routing.FAVORITE}/${id}/${status}`)
    .then(({data: updatedOffer}) => {
      dispatch(updateOffer(updatedOffer));
    })
    .catch(() => {
    });
};

export {
  fetchOffers,
  checkAuth,
  login,
  fetchOffer,
  fetchReviews,
  fetchNearby,
  fetchFavoriteOffers,
  postReview,
  postFavoriteHotel,
};
