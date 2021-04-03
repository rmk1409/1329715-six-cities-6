import React, {useCallback, useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postReview} from "../../store/api-action";
import * as PropTypes from "prop-types";
import {NameSpace} from "../../store/reducers/reducer";
import MemoReviewStarList from "../review-star-list/review-star-list";
import MemoReviewTextArea from "../review-textarea/review-textarea";
import {MAX_REVIEW_LENGTH, MIN_REVIEW_LENGTH} from "../../const";

const FormSendReview = ({id}) => {
  const isReviewSending = useSelector((state) => state[NameSpace.SERVER].isReviewSending);
  const dispatch = useDispatch();
  const refForm = useRef();
  const refErrorMsg = useRef();
  const [isReviewValid, setReviewValid] = useState(false);
  const initialReviewState = {
    rating: ``,
    review: ``,
  };
  const [review, setReview] = useState(initialReviewState);
  const checkReviewValidation = () => {
    return review.rating && review.review.length > MIN_REVIEW_LENGTH && review.review.length < MAX_REVIEW_LENGTH;
  };

  useEffect(() => {
    setReviewValid(checkReviewValidation());
  }, [review]);

  const handleRatingChange = useCallback(({target}) => {
    setReview((prevState) => ({...prevState, [target.name]: target.value}));
  }, [review.rating]);

  const handleCommentChange = useCallback(({target}) => {
    setReview((prevState) => ({...prevState, [target.name]: target.value}));
  }, [review.review]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const comment = {rating: review.rating, comment: review.review};
    dispatch(postReview(id, comment, () => {
      if (refForm.current) {
        refForm.current.reset();
        setReview(initialReviewState);
      }
      if (refErrorMsg.current && refErrorMsg.current.textContent) {
        refErrorMsg.current.textContent = ``;
      }
    }, (err) => {
      if (refErrorMsg.current) {
        refErrorMsg.current.textContent = `Some error happened while sending the review: ${err}`;
      }
    }));

  };

  return <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} ref={refForm}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      <MemoReviewStarList onStarsChange={handleRatingChange}/>
    </div>
    <p style={{color: `red`}} ref={refErrorMsg}/>
    <MemoReviewTextArea onCommentChange={handleCommentChange}/>
    <div className="reviews__button-wrapper">
      <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe
        your stay with at least <b className="reviews__text-amount">50 characters</b>.
      </p>
      <button
        className="reviews__submit form__submit button" type="submit" disabled={!isReviewValid || isReviewSending}
      >
        {isReviewSending ? `Submitting` : `Submit`}
      </button>
    </div>
  </form>;
};

FormSendReview.propTypes = {
  id: PropTypes.string.isRequired,
};

export {FormSendReview};
