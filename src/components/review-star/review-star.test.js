import React from 'react';
import {render, screen} from '@testing-library/react';
import {ReviewStar} from "./review-star";


it(`Review-star should render correctly`, () => {
  render(<ReviewStar rating={`5`} index={5} onStarsChange={() => {
  }}/>);
  expect(screen.getByTitle(/5/i)).toBeInTheDocument();
});
