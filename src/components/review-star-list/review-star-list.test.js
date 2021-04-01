import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {ReviewStarList} from "./review-star-list";
import {ratings} from "../../const";


it(`Review-text-area should render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <ReviewStarList onStarsChange={()=>{}}/>
      </Router>
  );
  expect(screen.getAllByTestId(/review-star/i)).toHaveLength(ratings.length);
});
