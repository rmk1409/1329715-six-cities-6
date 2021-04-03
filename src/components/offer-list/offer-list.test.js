import React from 'react';
import {render, screen} from '@testing-library/react';
import {OfferList} from "./offer-list";
import {OfferType} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState} from "../../store/reducers/server-reducer";

const mockStore = configureStore({});
const store = mockStore({
  [NameSpace.SERVER]: initialState,
});

const testOffers = [{
  id: 1,
  city: {
    name: `Some-name`
  },
  [`is_favorite`]: true,
}];

describe(`offer list should render correctly`, () => {
  it(`offer list with type 'MAIN' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferList offers={testOffers} type={OfferType.MAIN}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-list/i)).toHaveClass(`cities__places-list places__list tabs__content`);
  });

  it(`offer list with type 'NEAR' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferList offers={testOffers} type={OfferType.NEAR}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-list/i)).toHaveClass(`near-places__list places__list`);
  });

  it(`offer list with type 'FAVORITE' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferList offers={testOffers} type={OfferType.FAVORITE}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-list/i)).toHaveClass(`favorites__places`);
  });
});
