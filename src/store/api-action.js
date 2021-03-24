import {ActionCreator} from "./action";

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const fetchFavoriteOffers = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteOffers(data)))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
);

const fetchNearby = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearby(data)))
);

const fetchOffer = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadAnOffer(data)))
    .catch(() => dispatch(ActionCreator.loadAnOffer({id: -1})))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.setAuthorization(true));
      dispatch(ActionCreator.setAuthorizationInfo(data));
    })
    .then(() => ActionCreator.redirectToRoute(`/`))
    .catch(() => {
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(({data}) => {
      dispatch(ActionCreator.setAuthorization(true));
      dispatch(ActionCreator.setAuthorizationInfo(data));
    })
);

const postReview = (id, comment, refForm) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, comment)
    .then(({data}) => {
      dispatch(ActionCreator.loadReviews(data));
      refForm.current.reset();
    })
    .catch((err) => {
      // eslint-disable-next-line no-alert
      alert(`Some error happened while sending the review: ${err}`);
    })
    .then(() => {
      dispatch(ActionCreator.setSendingReview(false));
    })
);

export {fetchOffers, checkAuth, login, fetchOffer, fetchReviews, fetchNearby, fetchFavoriteOffers, postReview};
