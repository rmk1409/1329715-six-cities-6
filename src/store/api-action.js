import {ActionCreator} from "./action";

const fetchOffers = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadOffers(data)))
);

const fetchReviews = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadReviews(data)))
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

export {fetchOffers, checkAuth, login, fetchOffer, fetchReviews};
