import React from 'react';
import {render, screen} from '@testing-library/react';
import {ReviewStarList} from "./review-star-list";
import {ratings} from "../../const";

it(`Review-star-list should render correctly`, () => {
  render(<ReviewStarList onStarsChange={() => {}}/>);
  expect(screen.getAllByTestId(/review-star-input/i)).toHaveLength(ratings.length);
  expect(screen.getAllByTestId(/review-star-label/i)).toHaveLength(ratings.length);
});
