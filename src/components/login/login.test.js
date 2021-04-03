import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState} from "../../store/reducers/server-reducer";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import {Login} from "./login";

it(`header should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();

  const store = mockStore({
    [NameSpace.SERVER]: {...initialState},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Login/>
        </Router>
      </Provider>
  );
  expect(screen.getAllByText(/Sign in/i)).toHaveLength(3);
});
