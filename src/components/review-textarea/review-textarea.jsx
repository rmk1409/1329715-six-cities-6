import React, {memo} from "react";
import * as PropTypes from "prop-types";

const ReviewTextArea = ({onCommentChange}) => (
  <textarea
    className="reviews__textarea form__textarea" id="review" name="review" onChange={onCommentChange}
    placeholder="Tell how was your stay, what you like and what can be improved" data-testid="textarea"
  />
);

ReviewTextArea.propTypes = {
  onCommentChange: PropTypes.func.isRequired,
};

const MemoReviewTextArea = memo(ReviewTextArea);

export {MemoReviewTextArea, ReviewTextArea};
export default MemoReviewTextArea;
