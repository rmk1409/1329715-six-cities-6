import React from 'react';
import {render, screen} from '@testing-library/react';
import {FormSendReview} from "./form-send-review";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState as serverInitialState} from "../../store/reducers/server-reducer";

it(`Favorites-location-list-item should render correctly`, () => {
  const mockStore = configureStore({});
  const store = mockStore({
    [NameSpace.SERVER]: {...serverInitialState}
  });

  render(
      <Provider store={store}>
        <FormSendReview id={`10`}/>
      </Provider>
  );
  expect(screen.getByText(/Your review/i)).toBeInTheDocument();
});
