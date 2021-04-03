import React from 'react';
import {render, screen} from '@testing-library/react';
import {Router} from 'react-router-dom';
import {createMemoryHistory} from 'history';
import * as redux from 'react-redux';
import {Provider} from "react-redux";
import {App} from "./app";
import configureStore from 'redux-mock-store';
import {NameSpace} from "../../store/reducers/reducer";
import {initialState as initialStateServer} from "../../store/reducers/server-reducer";
import {initialState as initialStateClient} from "../../store/reducers/client-reducer";
import {Routing} from "../../const";

const stubOffers = [
  {
    "id": 1,
    "preview_image": `img/apartment-01.jpg`,
    "is_premium": true,
    "price": 120,
    "is_favorite": false,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `apartment`,
    "rating": 4,

    "images": [`img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    "bedrooms": 3,
    "max_adults": 4,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 1,
      "is_pro": true,
      "name": `Angelina`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,

    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
      "zoom": 8
    },
  },
  {
    "id": 2,
    "preview_image": `img/room.jpg`,
    "is_premium": false,
    "price": 80,
    "is_favorite": true,
    "title": `Wood and stone place`,
    "type": `Private room`,
    "rating": 4,

    "images": [`img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    "bedrooms": 1,
    "max_adults": 2,
    "goods": [`Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 1,
      "is_pro": true,
      "name": `Angelina`
    },
    "description": `Wood A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,

    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "location": {
      "latitude": 52.369553943508,
      "longitude": 4.85309666406198,
      "zoom": 8
    },
  },
  {
    "id": 3,
    "preview_image": `img/apartment-02.jpg`,
    "is_premium": false,
    "price": 132,
    "is_favorite": false,
    "title": `Canal View Prinsengracht`,
    "type": `Apartment`,
    "rating": 4.5,

    "images": [`img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    "bedrooms": 4,
    "max_adults": 5,
    "goods": [`Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 1,
      "is_pro": true,
      "name": `Angelina`
    },
    "description": `Canal A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,

    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.929309666406198,
      "zoom": 8
    },
  },
  {
    "id": 4,
    "preview_image": `img/apartment-03.jpg`,
    "is_premium": true,
    "price": 180,
    "is_favorite": false,
    "title": `Nice, cozy, warm big bed apartment`,
    "type": `Apartment`,
    "rating": 5,

    "images": [`img/studio-01.jpg`, `img/apartment-01.jpg`],
    "bedrooms": 5,
    "max_adults": 5,
    "goods": [`Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 1,
      "is_pro": true,
      "name": `Angelina`
    },
    "description": `Nice A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,

    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "location": {
      "latitude": 52.3809553943508,
      "longitude": 4.939309666406198,
      "zoom": 8
    },
  },
  {
    "id": 5,
    "preview_image": `img/apartment-small-04.jpg`,
    "is_premium": false,
    "price": 180,
    "is_favorite": true,
    "title": `White castle`,
    "type": `Apartment`,
    "rating": 5,

    "images": [`img/apartment-small-04.jpg`],
    "bedrooms": 7,
    "max_adults": 7,
    "goods": [`Dishwasher`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 1,
      "is_pro": true,
      "name": `Angelina`
    },
    "description": `White A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,

    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Cologne`
    },
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.939319666406108,
      "zoom": 8
    },
  },
];

const mockStore = configureStore({});

describe(`Test routing`, () => {
  let history;

  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  beforeEach(() => {
    history = createMemoryHistory();
  });


  it(`Render 'Main Page' when user navigate to '/' url`, () => {
    const store = mockStore({
      [NameSpace.SERVER]: {...initialStateServer, offers: stubOffers, isOffersLoaded: true},
      [NameSpace.CLIENT]: {...initialStateClient},
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/places to stay /i)).toBeInTheDocument();
    expect(screen.getAllByText(/Paris/i)).toHaveLength(2);
    expect(screen.getByText(/Cologne/i)).toBeInTheDocument();
    expect(screen.getByText(/Brussels/i)).toBeInTheDocument();
  });

  it(`Render 'Sign in' when user navigate to '/login' url`, () => {
    history.push(Routing.LOGIN);

    const store = mockStore({
      [NameSpace.SERVER]: {...initialStateServer},
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it(`Render 'Favorites' when user navigate to '/favorites' url`, () => {
    history.push(Routing.FAVORITES);

    const store = mockStore({
      [NameSpace.SERVER]: {
        ...initialStateServer,
        isUserAuthorized: true,
        authInfo: {email: `some-email`},
        isFavoriteOffersLoaded: true
      },
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/Nothing yet saved./i)).toBeInTheDocument();
    expect(screen.getByText(/Save properties to narrow down search or plan your future trips./i)).toBeInTheDocument();
  });

  it(`Render 'Offer' when user navigate to '/offer/id' url`, () => {
    history.push(`${Routing.OFFER}/1`);

    const store = mockStore({
      [NameSpace.SERVER]: {...initialStateServer, currentOpenOfferData: stubOffers[0]},
      [NameSpace.CLIENT]: {...initialStateClient},
    });
    render(
        <Provider store={store}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/What's inside/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the host/i)).toBeInTheDocument();
    expect(screen.getByText(/Reviews/i)).toBeInTheDocument();
  });

  it(`Render '404' when user navigate to 'wrong address' url`, () => {
    history.push(`/some-wrong-address`);

    render(
        <Provider store={mockStore({})}>
          <Router history={history}>
            <App/>
          </Router>
        </Provider>
    );
    expect(screen.getByText(/404. Page not found/i)).toBeInTheDocument();
    expect(screen.getByText(/Вернуться на главную/i)).toBeInTheDocument();
  });
});
