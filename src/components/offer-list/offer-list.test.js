import React from 'react';
import {render, screen} from '@testing-library/react';
import {OfferList} from "./offer-list";
import {OfferType} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";

jest.mock(`../offer-card/offer-card`, () => {
  const mockOfferCard = () => <>Offer card</>;
  mockOfferCard.displayName = `MockOfferCard`;

  return {
    __esModule: true,
    default: () => {
      return mockOfferCard();
    },
  };
});

const mockStore = configureStore({});
const store = mockStore({});

describe(`offer list should render correctly`, () => {
  it(`offer list with type 'MAIN' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferList offers={[]} type={OfferType.MAIN}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-list/i)).toHaveClass(`cities__places-list places__list tabs__content`);
  });

  it(`offer list with type 'NEAR' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferList offers={[]} type={OfferType.NEAR}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-list/i)).toHaveClass(`near-places__list places__list`);
  });

  it(`offer list with type 'FAVORITE' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferList offers={[]} type={OfferType.FAVORITE}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-list/i)).toHaveClass(`favorites__places`);
  });
});
