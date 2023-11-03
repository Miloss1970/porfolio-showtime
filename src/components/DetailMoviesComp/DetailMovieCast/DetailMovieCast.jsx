import React from "react";
import CastCard from "../../CastCard/CastCard.jsx";
import { Link } from "react-router-dom";

function DetailMovieCast({ movieCast }) {
  return (
    <div className="mt-[80px]">
      <h1 className="text-gray-200 font-bold text-[20px] mb-[10px]">
        Cast <span className="text-gray-500">({movieCast.length})</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {movieCast?.map((cast, i) => {
          return (
            <Link to={`/actorDetail/${cast.id}`} key={i}>
              <CastCard cast={cast} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default DetailMovieCast;
