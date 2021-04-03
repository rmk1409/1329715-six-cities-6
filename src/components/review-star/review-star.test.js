import React from 'react';
import {render, screen} from '@testing-library/react';
import {ReviewStar} from "./review-star";
import userEvent from "@testing-library/user-event";

it(`Review-star should render correctly`, () => {
  const handler = jest.fn();
  let isInvoked = false;
  handler.mockImplementation(() => (isInvoked = true));

  render(<ReviewStar rating={`5`} index={5} onStarsChange={handler}/>);

  expect(screen.getByTitle(/5/i)).toBeInTheDocument();
  userEvent.click(screen.getByTestId(/review-star-input/i));
  expect(screen.getByTestId(/review-star-input/i).checked).toBe(true);
  expect(isInvoked).toBe(true);
});
