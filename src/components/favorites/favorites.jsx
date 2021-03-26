import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {FavoritesLocationListItem} from "../favorites-location-list-item/favorites-location-list-item";
import {EmptyFavorites} from "../empty-favorites/empty-favorites";
import {connect} from "react-redux";
import {ConnectedHeader} from "../header/header";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchFavoriteOffers} from "../../store/api-action";
import {NameSpace} from "../../store/reducers/reducer";

const Favorites = ({offers, isFavoriteOffersLoaded, onLoadData}) => {
  useEffect(()=>{
    if (!isFavoriteOffersLoaded) {
      onLoadData();
    }
  }, [isFavoriteOffersLoaded]);

  if (!isFavoriteOffersLoaded) {
    return <LoadingScreen/>;
  }

  const cityToOffersMap = new Map();
  offers.forEach((offer) => {
    const cityName = offer.city.name;
    if (offer[`is_favorite`]) {
      if (cityToOffersMap.has(cityName)) {
        cityToOffersMap.get(cityName).push(offer);
      } else {
        cityToOffersMap.set(cityName, [offer]);
      }
    }
  });

  if (!cityToOffersMap.size) {
    return <EmptyFavorites/>;
  }

  return <div className="page">
    <ConnectedHeader/>

    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {Array.from(cityToOffersMap).map(([city, offersForCity]) =>
              <FavoritesLocationListItem key={city} name={city} offers={offersForCity}/>)}
          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <a className="footer__logo-link" href="main.html">
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
      </a>
    </footer>
  </div>;
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
  isFavoriteOffersLoaded: PropTypes.bool.isRequired,
  onLoadData: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state[NameSpace.SERVER].favoriteOffers,
  isFavoriteOffersLoaded: state[NameSpace.SERVER].isFavoriteOffersLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  onLoadData() {
    dispatch(fetchFavoriteOffers());
  }
});

const ConnectedFavorites = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export {ConnectedFavorites};
