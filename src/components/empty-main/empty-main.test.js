import React from 'react';
import {render, screen} from '@testing-library/react';
import {EmptyMain} from "./empty-main";

jest.mock(`../empty-cities-container/empty-cities-container`, () => {
  const mockEmptyCitiesContainer = () => <>Empty cities container</>;
  mockEmptyCitiesContainer.displayName = `MockEmptyCitiesContainer`;

  return {
    __esModule: true,
    default: () => {
      return mockEmptyCitiesContainer();
    },
  };
});

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

it(`Empty-main should render correctly`, () => {
  render(<EmptyMain/>);
  expect(screen.getByTestId(/page-main/i)).toBeInTheDocument();
});
