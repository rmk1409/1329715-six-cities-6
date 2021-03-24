import React from "react";
import {Header} from "../header/header";
import {useParams} from "react-router-dom";
import PropTypes from "prop-types";
import {NotFound} from "../404/404";
import {Amsterdam, DECIMAL_RADIX, OfferType} from "../../const";
import {addActiveClass, getRatingWidth} from "../../util";
import {Review} from "../review/review";
import {FormSendReview} from "../form-send-review/form-send-review";
import {ConnectedOfferList} from "../offer-list/offer-list";
import {ConnectedMap} from "../map/map";
import {connect} from "react-redux";

const Offer = ({offers, reviews}) => {
  const {id} = useParams();
  const currentOffer = offers.find((current) => current.id === parseInt(id, DECIMAL_RADIX));
  if (!currentOffer) {
    return <NotFound/>;
  }
  const bookmarkClass = `property__bookmark-button button ${addActiveClass(currentOffer[`is_favorite`], `property__bookmark-button--active`)}`;
  const ratingWidth = getRatingWidth(currentOffer.rating);

  const reviewsForOffer = reviews.filter((review) => review[`offer_id`] === currentOffer.id);

  return <div className="page">
    <Header/>

    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {currentOffer.images.map((value, index) =>
              <div key={`${value}-${index}`} className="property__image-wrapper">
                <img className="property__image" src={value} alt={`${currentOffer.type} photo`}/>
              </div>)}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {currentOffer[`is_premium`] ?
              <div className="property__mark">
                <span>Premium</span>
              </div> :
              ``}
            <div className="property__name-wrapper">
              <h1 className="property__name">
                {currentOffer.title}
              </h1>
              <button className={bookmarkClass} type="button">
                <svg className="property__bookmark-icon" width="31" height="33">
                  <use xlinkHref="#icon-bookmark"/>
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: `${ratingWidth}%`}}/>
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">{currentOffer.rating}</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {currentOffer.type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {currentOffer.bedrooms} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {currentOffer[`max_adults`]} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">&euro;{currentOffer.price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">What&apos;s inside</h2>
              <ul className="property__inside-list">
                {currentOffer.goods.map((value) =>
                  <li key={value} className="property__inside-item">
                    {value}
                  </li>)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar" src={currentOffer.host[`avatar_url`]} width="74"
                    height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {currentOffer.host.name}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {currentOffer.description}
                </p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">Reviews &middot; <span
                className="reviews__amount">{reviewsForOffer.length}</span></h2>
              <ul className="reviews__list">
                {reviewsForOffer.map((review) => <Review key={review.id} review={review}/>)}
              </ul>
              <FormSendReview/>
            </section>
          </div>
        </div>
        <section className="property__map map">
          <ConnectedMap city={Amsterdam} offers={offers.slice(0, 3)}/>
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <ConnectedOfferList offers={offers.slice(0, 3)} type={OfferType.NEAR}/>
        </section>
      </div>
    </main>
  </div>;
};

Offer.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  offers: state.offers,
});

const ConnectedOffer = connect(mapStateToProps)(Offer);

export {ConnectedOffer};
