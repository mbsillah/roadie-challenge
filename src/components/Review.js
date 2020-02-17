import React from "react";
import Rating from "react-rating";
import { MdStar, MdStarBorder } from "react-icons/md";

const Review = props => {
  const { review } = props;
  return (
    <div className="review">
      <div className="reviewHeader">
        <div>
          <div>{review.title}</div>
          <span>
            by {review.user} on {review.date}
          </span>
        </div>
        <Rating
          initialRating={review.rating}
          readonly
          emptySymbol={<MdStarBorder className="stars" />}
          fullSymbol={<MdStar className="stars"/>}
        />
      </div>
      <p>{review.review}</p>
    </div>
  );
};

export default Review;
