import React from 'react';
import {render, screen} from '@testing-library/react';
import {ReviewTextArea} from "./review-textarea";


it(`Review-text-area should render correctly`, () => {
  render(<ReviewTextArea onCommentChange={() => {
  }}/>);
  expect(screen.getByTestId(/textarea/i)).toBeInTheDocument();
});
