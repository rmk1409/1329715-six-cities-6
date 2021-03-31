import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import {ReviewTextArea} from "./review-textarea";


it(`Review-text-area should render correctly`, () => {
  const history = createMemoryHistory();
  render(
      <Router history={history}>
        <ReviewTextArea onCommentChange={()=>{}}/>
      </Router>
  );
  expect(screen.getByTestId(/textarea/i)).toBeInTheDocument();
});
