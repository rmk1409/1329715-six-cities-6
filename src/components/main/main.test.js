import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState as serverInitialState} from "../../store/reducers/server-reducer";
import {initialState as clientInitialState} from "../../store/reducers/client-reducer";
import {Router} from "react-router-dom";
import {Main} from "./main";
import {createMemoryHistory} from "history";
import {cities} from "../../const";

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

it(`Main should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();
  const store = mockStore({
    [NameSpace.CLIENT]: clientInitialState,
    [NameSpace.SERVER]: {
      ...serverInitialState,
      isOffersLoaded: true,
      offers: [{
        id: 1,
        city: {name: cities[0].name},
      }],
    },
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Main/>
        </Router>
      </Provider>
  );

  expect(screen.getByText(/places to stay in/i)).toBeInTheDocument();
});
