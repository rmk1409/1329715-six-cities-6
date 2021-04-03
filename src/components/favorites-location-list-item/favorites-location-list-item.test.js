import React from 'react';
import {render, screen} from '@testing-library/react';
import {FavoritesLocationListItem} from "./favorites-location-list-item";

jest.mock(`../offer-list/offer-list`, () => {
  const mockOfferList = () => <>Offer list</>;
  mockOfferList.displayName = `MockOfferList`;

  return {
    __esModule: true,
    default: () => {
      return mockOfferList();
    },
  };
});

it(`Favorites-location-list-item should render correctly`, () => {
  const testFavoriteOffers = [{
    id: 1,
    city: {
      name: `some-city-name`
    },
    [`is_favorite`]: true,
  }];

  render(<FavoritesLocationListItem name={`some-city-name`} offers={testFavoriteOffers}/>);

  expect(screen.getByText(/some-city-name/i)).toBeInTheDocument();
});
