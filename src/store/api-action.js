import {
  loadAnOffer,
  loadFavoriteOffers,
  loadNearby,
  loadOffers,
  loadReviews, redirectToRoute,
  setAuthorization,
  setAuthorizationInfo, setSendingReview
} from "./action";

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadOffers(data)))
);

const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteOffers(data)))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadReviews(data)))
);

const fetchNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearby(data)))
);

const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(loadAnOffer(data)))
    .catch(() => dispatch(loadAnOffer({id: -1})))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(setAuthorization(true));
      dispatch(setAuthorizationInfo(data));
    })
    .then(() => redirectToRoute(`/`))
    .catch(() => {
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(setAuthorization(true));
      dispatch(setAuthorizationInfo(data));
    })
);

const postReview = (id, comment, refForm) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, comment)
    .then(({data}) => {
      dispatch(loadReviews(data));
      refForm.current.reset();
    })
    .catch((err) => {
      // eslint-disable-next-line no-alert
      alert(`Some error happened while sending the review: ${err}`);
    })
    .then(() => {
      dispatch(setSendingReview(false));
    })
);

export {fetchOffers, checkAuth, login, fetchOffer, fetchReviews, fetchNearby, fetchFavoriteOffers, postReview};
