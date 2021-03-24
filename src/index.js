import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app/app";
import {reviews as reviewsMock} from "./mocks/reviews";
import {applyMiddleware, createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import {createAPI} from "./services/api";
import thunk from "redux-thunk";

const axios = createAPI(
    // () => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH))
    () => store.dispatch(() => {
    })
);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axios))));

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviewsMock}/>
    </Provider>,
    document.querySelector(`#root`),
);
