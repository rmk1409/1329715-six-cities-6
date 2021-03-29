import React, {useRef, useState, useCallback, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {postReview} from "../../store/api-action";
import * as PropTypes from "prop-types";
import {setSendingReview} from "../../store/action";
import {NameSpace} from "../../store/reducers/reducer";
import {MemoReviewStarList} from "../review-star-list/review-star-list";
import {MemoReviewTextArea} from "../review-textarea/review-textarea";

const FormSendReview = ({id}) => {
  const {isReviewSending} = useSelector((state) => state[NameSpace.SERVER]);
  const dispatch = useDispatch();
  const refForm = useRef();
  const [isReviewValid, setReviewValid] = useState(false);
  const initialReviewState = {
    rating: ``,
    review: ``,
  };
  const [review, setReview] = useState(initialReviewState);
  const checkReviewValidation = () => {
    return review.rating && review.review.length > 50 && review.review.length < 300;
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
    dispatch(setSendingReview(true));
    const comment = {rating: review.rating, comment: review.review};
    dispatch(postReview(id, comment, () => {
      if (refForm.current) {
        refForm.current.reset();
        setReview(initialReviewState);
      }
    }));

  };

  return <form className="reviews__form form" action="#" method="post" onSubmit={handleSubmit} ref={refForm}>
    <label className="reviews__label form__label" htmlFor="review">Your review</label>
    <div className="reviews__rating-form form__rating">
      <MemoReviewStarList handleFormChange={handleRatingChange}/>
    </div>
    <MemoReviewTextArea handleFormChange={handleCommentChange}/>
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
