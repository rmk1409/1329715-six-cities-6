import React, {useState, useRef} from "react";
import {connect} from "react-redux";
import {postReview} from "../../store/api-action";
import * as PropTypes from "prop-types";
import {ActionCreator} from "../../store/action";

const FormSendReview = ({id, onSubmit, isReviewSending}) => {
  const refForm = useRef();
  const [isReviewValid, setReviewValid] = useState(false);
  const [review, setReview] = useState({
    rating: ``,
    review: ``,
  });

  const handleFormChange = ({target}) => {
    setReview((prevState) => ({...prevState, [target.name]: target.value}));
    setReviewValid(review.rating && review.review.length > 50 && review.review.length < 300);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit(id, review, refForm);
  };

  return <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} ref={refForm}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      <input
        className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"
        onChange={handleFormChange}/>
      <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input
        className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"
        onChange={handleFormChange}/>
      <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input
        className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"
        onChange={handleFormChange}/>
      <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input
        className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"
        onChange={handleFormChange}/>
      <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>

      <input
        className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"
        onChange={handleFormChange}/>
      <label
        htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"/>
        </svg>
      </label>
    </div>
    <textarea
      className="reviews__textarea form__textarea" id="review" name="review" onChange={handleFormChange}
      placeholder="Tell how was your stay, what you like and what can be improved"/>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe
        your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button className="reviews__submit form__submit button" type="submit" disabled={!isReviewValid || isReviewSending}>
        {isReviewSending ? `Submitting` : `Submit`}
      </button>
    </div>
  </form>;
};

FormSendReview.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  isReviewSending: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isReviewSending: state.isReviewSending,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(id, review, refForm) {
    dispatch(ActionCreator.setSendingReview(true));
    const comment = {rating: review.rating, comment: review.review};
    dispatch(postReview(id, comment, refForm));
  },
});

const ConnectedFormSendReview = connect(mapStateToProps, mapDispatchToProps)(FormSendReview);
export {ConnectedFormSendReview};
