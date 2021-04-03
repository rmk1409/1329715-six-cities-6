import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState as serverInitialState} from "../../store/reducers/server-reducer";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {Offer} from "./offer";
import {initialState as clientInitialState} from "../../store/reducers/client-reducer";
import {cities, Routing} from "../../const";

jest.mock(`../header/header`, () => {
  const mockHeader = () => <>Header</>;
  mockHeader.displayName = `MockHeader`;

  return {
    __esModule: true,
    default: () => {
      return mockHeader();
    },
  };
});

jest.mock(`../map/map`, () => {
  const mockMap = () => <>Map</>;
  mockMap.displayName = `MockMap`;

  return {
    __esModule: true,
    default: () => {
      return mockMap();
    },
  };
});

jest.mock(`react-router-dom`, () => ({
  ...jest.requireActual(`react-router-dom`),
  useParams: () => ({id: `1`}),
  useRouteMatch: () => ({url: `/offer/1`}),
}));

it(`offer page should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  history.push(`${Routing.OFFER}/1`);

  const currentOpenOfferData = {
    id: 1,
    images: [],
    goods: [`some-goods`],
    host: {
      [`avatar_url`]: `some-img`
    },
    city: {
      name: cities[0].name
    },
  };

  const store = mockStore({
    [NameSpace.SERVER]: {...serverInitialState, currentOpenOfferData},
    [NameSpace.CLIENT]: {...clientInitialState}
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Offer/>
        </Router>
      </Provider>
  );

  expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
  expect(screen.getByText(/some-goods/i)).toBeInTheDocument();
});
