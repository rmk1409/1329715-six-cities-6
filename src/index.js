import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app/app";
import {offers as offersMock} from "./mocks/offers";

ReactDOM.render(
    <App offers={offersMock}/>,
    document.querySelector(`#root`)
);
