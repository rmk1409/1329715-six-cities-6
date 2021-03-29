import {
  loadAnOffer,
  loadFavoriteOffers,
  loadNearby,
  loadOffers,
  loadReviews, redirectToRoute,
  setAuthorization,
  setAuthorizationInfo, setSendingReview, updateOffer,
} from "./action";

const fetchOffers = () => (dispatch, _getState, api) => {
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data)));
};

const fetchFavoriteOffers = () => (dispatch, _getState, api) => {
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(data)));
};

const fetchReviews = (id) => (dispatch, _getState, api) => {
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(data)));
};

const fetchNearby = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearby(data)));
};

const fetchOffer = (id) => (dispatch, _getState, api) => {
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(loadAnOffer(data)))
    .catch(() => dispatch(loadAnOffer({id: -1})));
};

const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(({data}) => {
      dispatch(setAuthorization(true));
      dispatch(setAuthorizationInfo(data));
    })
    .then(() => redirectToRoute(`/`))
    .catch(() => {
    });
};

const login = ({login: email, password}) => (dispatch, _getState, api) => {
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(setAuthorization(true));
      dispatch(setAuthorizationInfo(data));
    });
};

const postReview = (id, comment, successCb, errorCb) => (dispatch, _getState, api) => {
  new Promise((resolve) => {
    dispatch(setSendingReview(true));
    resolve();
  }).then(() => {
    return api.post(`/comments/${id}`, comment);
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
  api.post(`/favorite/${id}/${status}`)
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
