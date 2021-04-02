import React from 'react';
import {render, screen} from '@testing-library/react';
import {ReviewStarList} from "./review-star-list";
import {ratings} from "../../const";


it(`Review-text-area should render correctly`, () => {
  render(<ReviewStarList onStarsChange={() => {
  }}/>);
  expect(screen.getAllByTestId(/review-star/i)).toHaveLength(ratings.length);
});
