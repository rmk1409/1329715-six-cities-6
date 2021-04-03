import React from 'react';
import {render, screen} from '@testing-library/react';
import {ReviewTextArea} from "./review-textarea";
import userEvent from "@testing-library/user-event";


it(`Review-text-area should render correctly`, () => {
  const handler = jest.fn();
  let isInvoked = false;
  handler.mockImplementation(() => (isInvoked = true));

  render(<ReviewTextArea onCommentChange={handler}/>);

  expect(screen.getByTestId(/textarea/i)).toBeInTheDocument();
  userEvent.type(screen.getByTestId(/textarea/i), `some-text`);
  expect(screen.getByTestId(/textarea/i).value).toBe(`some-text`);
  expect(isInvoked).toBe(true);
});
