import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {NameSpace} from "../../store/reducers/reducer";
import configureStore from "redux-mock-store";
import {initialState as serverInitialState} from "../../store/reducers/server-reducer";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {initialState as clientInitialState} from "../../store/reducers/client-reducer";
import {Favorites} from "./favorites";

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

it(`Favorites should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();

  const testFavoriteOffers = [{
    id: 1,
    city: {
      name: `Some-name`
    },
    [`is_favorite`]: true,
  }];

  const store = mockStore({
    [NameSpace.SERVER]: {
      ...serverInitialState,
      isFavoriteOffersLoaded: true,
      favoriteOffers: testFavoriteOffers
    },
    [NameSpace.CLIENT]: {...clientInitialState},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Favorites/>
        </Router>
      </Provider>
  );

  expect(screen.getByText(/Saved listing/i)).toBeInTheDocument();
  expect(screen.getByText(/Some-name/i)).toBeInTheDocument();
});
