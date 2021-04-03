import React from 'react';
import {render, screen} from '@testing-library/react';
import {EmptyFavorites} from "./empty-favorites";

jest.mock(`../header/header`, () => {
  const mockHeader = () => <>Header</>;
  mockHeader.displayName = `MockHeader`;

  return {
    __esModule: true,
    default: () => {
      return mockHeader();
    },
  };
});

it(`Empty-favorites should render correctly`, () => {
  render(<EmptyFavorites/>);
  expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
});
