import React from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const";
import {ConnectedOfferList} from "../offer-list/offer-list";

const FavoritesLocationListItem = ({name, offers}) => (
  <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{name}</span>
        </a>
      </div>
    </div>
    <ConnectedOfferList offers={offers} type={OfferType.FAVORITE}/>
  </li>
);

FavoritesLocationListItem.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.array.isRequired,
};

export {FavoritesLocationListItem};
