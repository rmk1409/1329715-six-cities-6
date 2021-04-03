import React from 'react';
import {render, screen} from '@testing-library/react';
import {SortOptions} from "./sort-options";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState} from "../../store/reducers/client-reducer";

it(`sort-options should render correctly`, () => {
  const mockStore = configureStore({});

  const store = mockStore({
    [NameSpace.CLIENT]: {...initialState},
  });

  render(
      <Provider store={store}>
        <SortOptions/>
      </Provider>
  );
  expect(screen.getByText(/Sort by/i)).toBeInTheDocument();
});
