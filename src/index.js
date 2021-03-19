import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app/app";
import {offers as offersMock} from "./mocks/offers";
import {reviews as reviewsMock} from "./mocks/reviews";

ReactDOM.render(
    <App offers={offersMock} reviews={reviewsMock}/>,
    document.querySelector(`#root`)
);
