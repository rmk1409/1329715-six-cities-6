import React from 'react';
import {render, screen} from '@testing-library/react';
import {Map} from "./map";
import {cities} from "../../const";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState as serverInitialState} from "../../store/reducers/server-reducer";
import {initialState as clientInitialState} from "../../store/reducers/client-reducer";

it(`Map should render correctly`, () => {
  const mockStore = configureStore({});
  const currentOpenOfferData = {
    location: {
      latitude: 0,
      longitude: 0,
    }
  };
  const store = mockStore({
    [NameSpace.CLIENT]: clientInitialState,
    [NameSpace.SERVER]: {...serverInitialState, currentOpenOfferData},
  });

  render(
      <Provider store={store}>
        <Map city={cities[0].name} isHighlightActiveOffer={false} offers={[]}/>
      </Provider>
  );

  expect(screen.getByTestId(/map/i)).toBeInTheDocument();
});
