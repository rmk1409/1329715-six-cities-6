import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState} from "../../store/reducers/server-reducer";
import {Header} from "./header";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

it(`header should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();

  const store = mockStore({
    [NameSpace.SERVER]: {...initialState, isUserAuthorized: true, authInfo: {email: `some-email`}},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <Header/>
        </Router>
      </Provider>
  );
  expect(screen.getByTestId(/header/i)).toBeInTheDocument();
  expect(screen.getByText(/some-email/i)).toBeInTheDocument();
});
