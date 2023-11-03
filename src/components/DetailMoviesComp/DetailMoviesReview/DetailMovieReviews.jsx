import React from "react";
import ReviewCard from "../../ReviewCard/ReviewCard.jsx";

function DetailMovieReviews({ movieReviews }) {
  return (
    <div className="mt-[80px]">
      <h1 className="text-gray-200 font-bold text-[20px] mb-[10px]">
        Reviews <span className="text-gray-500">({movieReviews.length})</span>
      </h1>

      {movieReviews?.map((review, i) => {
        return (
          <div key={i} className="mt-[20px]">
            <ReviewCard review={review} />
          </div>
        );
      })}
    </div>
  );
}

export default DetailMovieReviews;