import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {ReviewStar} from "./review-star";


it(`Review-star should render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <ReviewStar rating={`5`} index={5} onStarsChange={() => {}}/>
      </Router>
  );
  expect(screen.getByTitle(/5/i)).toBeInTheDocument();
});
