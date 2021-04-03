import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {NameSpace} from "../../store/reducers/reducer";
import configureStore from "redux-mock-store";
import {initialState as serverInitialState} from "../../store/reducers/server-reducer";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {initialState as clientInitialState} from "../../store/reducers/client-reducer";
import {FavoritesLocationListItem} from "./favorites-location-list-item";

it(`Favorites-location-list-item should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();

  const testFavoriteOffers = [{
    id: 1,
    city: {
      name: `some-city-name`
    },
    [`is_favorite`]: true,
  }];

  const store = mockStore({
    [NameSpace.SERVER]: {
      ...serverInitialState,
      isUserAuthorized: true,
      authInfo: {email: `some-email`},
      isFavoriteOffersLoaded: true,
      favoriteOffers: testFavoriteOffers
    },
    [NameSpace.CLIENT]: {...clientInitialState},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <FavoritesLocationListItem name={`some-city-name`} offers={testFavoriteOffers}/>
        </Router>
      </Provider>);

  expect(screen.getByText(/some-city-name/i)).toBeInTheDocument();
});
