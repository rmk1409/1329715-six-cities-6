import React from 'react';
import {render, screen} from '@testing-library/react';
import {EmptyFavorites} from "./empty-favorites";
import {Provider} from "react-redux";
import {NameSpace} from "../../store/reducers/reducer";
import configureStore from "redux-mock-store";
import {initialState} from "../../store/reducers/server-reducer";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

//
// jest.mock(`../../components/header/header`, () => {
//   const mockHeader = () => <>Header</>;
//   mockHeader.displayName = `MockHeader`;
//
//   return {
//     __esModule: true,
//     default: () => {
//       return mockHeader();
//     },
//   };
// });

it(`Empty-favorites should render correctly`, () => {
  const mockStore = configureStore({});
  const history = createMemoryHistory();

  const store = mockStore({
    [NameSpace.SERVER]: {...initialState, isUserAuthorized: true, authInfo: {email: `some-email`}},
  });

  render(
      <Provider store={store}>
        <Router history={history}>
          <EmptyFavorites/>
        </Router>
      </Provider>);
  expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
});
