import React from 'react';
import {render, screen} from '@testing-library/react';
import {Review} from "./review";

const stubReview = {
  "offer_id": 1,
  "user": {
    "avatar_url": `img/avatar-max.jpg`,
    "name": `Max`,
    "id": 1,
    "is_pro": false
  },
  "rating": 4,
  "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
  "date": `2019-05-08T14:13:56.569Z`,
  "id": 1
};

it(`Review should render correctly`, () => {
  render(<Review review={stubReview}/>);

  expect(screen.getByText(stubReview.user.name)).toBeInTheDocument();
  expect(screen.getByText(/Rating/i)).toBeInTheDocument();
  expect(screen.getByText(stubReview.comment)).toBeInTheDocument();
});
