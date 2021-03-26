import React from "react";
import {getRatingWidth} from "../../util";
import dateformat from "dateformat";
import {review as reviewPropType} from "../../prop-types";

const Review = ({review}) => {
  const date = new Date(review.date);
  const dateForAttribute = dateformat(date, `yyyy-mm-dd`);
  const dateForContent = dateformat(date, `mmmm yyyy`);

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img
          className="reviews__avatar user__avatar" src={review.user[`avatar_url`]} width="54" height="54"
          alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">{review.user.name}</span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{width: `${getRatingWidth(review.rating)}%`}}/>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {review.comment}
      </p>
      <time className="reviews__time" dateTime={dateForAttribute}>{dateForContent}</time>
    </div>
  </li>;
};

Review.propTypes = {
  review: reviewPropType.isRequired,
};

export {Review};
