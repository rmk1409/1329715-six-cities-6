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
import {checkAuth} from "./store/api-action";
import {ActionCreator} from "./store/action";
import {redirect} from "./store/middlewares/redirect";

const axios = createAPI(() => store.dispatch(ActionCreator.setAuthorization(false)));

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(axios)),
    applyMiddleware(redirect))
);

store.dispatch(checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <App reviews={reviewsMock}/>
    </Provider>,
    document.querySelector(`#root`),
);
