import React, {memo} from "react";
import {ReviewStar} from "../review-star/review-star";
import * as PropTypes from "prop-types";

const ratings = [`perfect`, `good`, `not bad`, `badly`, `terribly`];

const ReviewStarList = ({onStarsChange}) => (
  ratings.map((rating, index) =>
    <ReviewStar key={rating} rating={rating} index={ratings.length - index} onStarsChange={onStarsChange}/>
  )
);

ReviewStarList.propTypes = {
  onStarsChange: PropTypes.func.isRequired,
};

const MemoReviewStarList = memo(ReviewStarList);

export {MemoReviewStarList};
