import React from "react";
import PropTypes from "prop-types";
import {addActiveClass, getRatingWidth} from "../../util";

const OfferCard = ({offer, onMouseEnter, onMouseLeave}) => {
  const bookmarkClass = `place-card__bookmark-button button ${addActiveClass(offer[`is_favorite`], `place-card__bookmark-button--active`)}`;
  const ratingWidth = getRatingWidth(offer.rating);

  return <article
    className="cities__place-card place-card" onMouseEnter={onMouseEnter} data-id={offer.id}
    onMouseLeave={onMouseLeave}>
    {offer[`is_premium`] ?
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img
          className="place-card__image" src={offer[`preview_image`]} width="260" height="200"
          alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{offer.price}</b>
          <span className="place-card__price-text">&nbsp;&#47;&nbsp;night</span>
        </div>
        <button className={bookmarkClass} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"/>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${ratingWidth}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{offer.title}</a>
      </h2>
      <p className="place-card__type">{offer.type}</p>
    </div>
  </article>;
};

OfferCard.propTypes = {
  offer: PropTypes.object.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
};

export {OfferCard};
