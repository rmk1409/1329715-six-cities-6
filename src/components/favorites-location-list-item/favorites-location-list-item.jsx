import React from "react";
import PropTypes from "prop-types";
import {OfferFavoriteCard} from "../offer-favorite-card/offer-favorite-card";

const FavoritesLocationListItem = ({name, offers}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{name}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer) =>
        <OfferFavoriteCard key={offer.id} offer={offer}/>,
      )}
    </div>
  </li>
);

FavoritesLocationListItem.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export {FavoritesLocationListItem};
