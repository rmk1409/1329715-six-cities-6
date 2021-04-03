import React from 'react';
import {render, screen} from '@testing-library/react';
import {OfferType} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState} from "../../store/reducers/server-reducer";
import {OfferCard} from "./offer-card";
import userEvent from "@testing-library/user-event";

const mockStore = configureStore({});
const store = mockStore({
  [NameSpace.SERVER]: initialState,
});

const testOffer = {
  id: 1
};

describe(`offer card should render correctly`, () => {
  it(`offer card with type 'MAIN' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferCard offer={testOffer} onHandleEvent={() => {
          }} type={OfferType.MAIN}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-card-article/i)).toHaveClass(`cities__place-card`);
    expect(screen.getByTestId(/offer-card-wrapper/i)).toHaveClass(`cities__image-wrapper`);
  });

  it(`offer card with type 'NEAR' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferCard offer={testOffer} onHandleEvent={() => {
          }} type={OfferType.NEAR}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-card-article/i)).toHaveClass(`near-places__card`);
    expect(screen.getByTestId(/offer-card-wrapper/i)).toHaveClass(`near-places__image-wrapper`);
  });

  it(`offer card with type 'FAVORITE' should render correctly`, () => {
    render(
        <Provider store={store}>
          <OfferCard offer={testOffer} onHandleEvent={() => {
          }} type={OfferType.FAVORITE}/>
        </Provider>
    );
    expect(screen.getByTestId(/offer-card-article/i)).toHaveClass(`favorites__card`);
    expect(screen.getByTestId(/offer-card-wrapper/i)).toHaveClass(`favorites__image-wrapper`);
  });

  it(`offer card should cb invokes correctly`, () => {
    const handler = jest.fn();
    let isInvoked = false;
    handler.mockImplementation(() => (isInvoked = true));

    render(
        <Provider store={store}>
          <OfferCard offer={testOffer} onHandleEvent={handler} type={OfferType.MAIN}/>
        </Provider>
    );

    userEvent.hover(screen.getByTestId(/offer-card-article/i));
    expect(isInvoked).toBe(true);
  });
});
