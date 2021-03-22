import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app/app";
import {offers as offersMock} from "./mocks/offers";
import {reviews as reviewsMock} from "./mocks/reviews";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./store/reducer";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App offers={offersMock} reviews={reviewsMock}/>
    </Provider>,
    document.querySelector(`#root`),
);
