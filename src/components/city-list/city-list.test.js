import React from 'react';
import {render, screen} from '@testing-library/react';
import {CityList} from "./city-list";
import {cities} from "../../const";
import {Provider} from "react-redux";
import {NameSpace} from "../../store/reducers/reducer";
import {initialState as initialStateClient} from "../../store/reducers/client-reducer";
import configureStore from "redux-mock-store";

it(`CityList should render correctly`, () => {
  const mockStore = configureStore({});

  const store = mockStore({
    [NameSpace.CLIENT]: {...initialStateClient},
  });

  render(
      <Provider store={store}>
        <CityList cities={cities}/>
      </Provider>
  );

  expect(screen.getByText(/Cities/i)).toBeInTheDocument();
  cities.forEach((city) => {
    expect(screen.getByText(city.name)).toBeInTheDocument();
  });
});
