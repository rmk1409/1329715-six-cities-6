const ONE_STAR_WIDTH = 20;

const OfferType = {
  MAIN: `MAIN`,
  NEAR: `NEAR`,
  FAVORITE: `FAVORITE`
};

const cities = [
  {
    name: `Paris`,
    coords: [48.8566, 2.3522],
  },
  {
    name: `Cologne`,
    coords: [50.9375, 6.9603],
  },
  {
    name: `Brussels`,
    coords: [50.8503, 4.3517],
  },
  {
    name: `Amsterdam`,
    coords: [52.3678, 4.9041],
  },
  {
    name: `Hamburg`,
    coords: [53.5511, 9.9937],
  },
  {
    name: `Dusseldorf`,
    coords: [51.2277, 6.7735],
  },
];

const ratings = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const SortOption = {
  POPULAR: `Popular`,
  LOW_PRICE_FIRST: `Price: low to high`,
  HIGH_PRICE_FIRST: `Price: high to low`,
  TOP_RATED_FIRST: `Top rated first`,
};

const Routing = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITE: `/favorite`,
  FAVORITES: `/favorites`,
  OFFER: `/offer`,
  HOTELS: `/hotels`,
  COMMENTS: `/comments`,
};

const MAX_SHOWN_PHOTOS = 6;
const MAX_SHOWN_REVIEWS = 10;

const MIN_REVIEW_LENGTH = 50;
const MAX_REVIEW_LENGTH = 300;

export {
  ONE_STAR_WIDTH,
  OfferType,
  SortOption,
  cities,
  ratings,
  MAX_SHOWN_PHOTOS,
  MAX_SHOWN_REVIEWS,
  Routing,
  MIN_REVIEW_LENGTH,
  MAX_REVIEW_LENGTH
};
