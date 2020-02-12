import React from "react";

const Review = props => {
  const { review } = props;
  return (
    <div>
      <div>
        <h4>{review.title}</h4>
        <span>
          by {review.user} on {review.date}
        </span>
      </div>
      <div>
        <p>{review.review}</p>
      </div>
    </div>
  );
};

export default Review;
