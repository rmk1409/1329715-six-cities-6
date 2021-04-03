import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {NameSpace} from "../../store/reducers/reducer";
import configureStore from "redux-mock-store";
import {initialState as serverInitialState} from "../../store/reducers/server-reducer";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {EmptyMain} from "./empty-main";
import {initialState as clientInitialState} from "../../store/reducers/client-reducer";

it(`Empty-main should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();

  const store = mockStore({
    [NameSpace.SERVER]: {...serverInitialState, isUserAuthorized: true, authInfo: {email: `some-email`}},
    [NameSpace.CLIENT]: {...clientInitialState},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <EmptyMain/>
        </Router>
      </Provider>);
  expect(screen.getByTestId(/page-main/i)).toBeInTheDocument();
});
