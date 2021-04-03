import React from 'react';
import {render, screen} from '@testing-library/react';
import {Provider} from "react-redux";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState as initialStateClient} from "../../store/reducers/client-reducer";
import configureStore from "redux-mock-store";
import {EmptyCitiesContainer} from "./empty-cities-container";

it(`Empty-cities-container should render correctly`, () => {
  const mockStore = configureStore({});

  const store = mockStore({
    [NameSpace.CLIENT]: {...initialStateClient},
  });

  render(
      <Provider store={store}>
        <EmptyCitiesContainer/>
      </Provider>
  );

  expect(screen.getByText(/No places to stay available/i)).toBeInTheDocument();
  expect(screen.getByText(/We could not find any property available at the moment in/i)).toHaveTextContent(initialStateClient.activeCity);
});
