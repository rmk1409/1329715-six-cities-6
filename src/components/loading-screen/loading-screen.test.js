import React from 'react';
import {render} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import LoadingScreen from "./loading-screen";

it(`LoadingScreen should render correctly`, () => {
  const history = createMemoryHistory();
  const {getByText} = render(
      <Router history={history}>
        <LoadingScreen />
      </Router>
  );

  expect(getByText(`Loading ...`)).toBeInTheDocument();
});
