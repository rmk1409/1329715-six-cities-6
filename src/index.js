import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./components/app/app";

const OFFER_QUANTITY = 5;

ReactDOM.render(
    <App offerQuantity = {OFFER_QUANTITY}/>,
    document.querySelector(`#root`)
);
