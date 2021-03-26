import React, {memo} from "react";
import * as PropTypes from "prop-types";

const ReviewTextArea = ({handleFormChange}) => (
  <textarea
    className="reviews__textarea form__textarea" id="review" name="review" onChange={handleFormChange}
    placeholder="Tell how was your stay, what you like and what can be improved"/>
);

ReviewTextArea.propTypes = {
  handleFormChange: PropTypes.func.isRequired,
};

const MemoReviewTextArea = memo(ReviewTextArea);

export {MemoReviewTextArea};
