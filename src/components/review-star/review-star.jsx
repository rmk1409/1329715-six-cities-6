import React from "react";
import PropTypes from "prop-types";

const ReviewStar = ({rating, index, onStarsChange}) => (
  <>
    <input
      className="form__rating-input visually-hidden" name="rating" value={index} id={`${index}-stars`}
      type="radio" onChange={onStarsChange}
    />
    <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" title={rating}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"/>
      </svg>
    </label>
  </>
);

ReviewStar.propTypes = {
  rating: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onStarsChange: PropTypes.func.isRequired,
};

export {ReviewStar};
