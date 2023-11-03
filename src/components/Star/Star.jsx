import React from "react";

import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

function Star({ star }) {
  const raitingStar = Array.from({ length: 10 }, (elem, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {star >= i + 1 ? (
          <BsStarFill className="text-yellow-400" />
        ) : star >= number ? (
          <BsStarHalf className="text-yellow-400" />
        ) : (
          <BsStar className="text-yellow-400" />
        )}
      </span>
    );
  });
  return <div className="flex">{raitingStar}</div>;
}

export default Star;
