import React from "react";
import PropTypes from "prop-types";
import {OfferType} from "../../const";
import OfferList from "../offer-list/offer-list";
import {offer} from "../../prop-types";

const FavoritesLocationListItem = ({name, offers}) => {
  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{name}</span>
        </a>
      </div>
    </div>
    <OfferList offers={offers} type={OfferType.FAVORITE}/>
  </li>;
};

FavoritesLocationListItem.propTypes = {
  name: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(offer).isRequired,
};

export {FavoritesLocationListItem};
