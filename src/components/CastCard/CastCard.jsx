import React from "react";
import profileImg from "../../assets/profile.jpg";

function CastCard({ cast }) {
  return (
    <div>
      <div className="flex gap-2 hover:scale-105 hover:opacity-70 transition-all duration-500">
        {cast.profile_path === null ? (
          <img src={profileImg} className="w-[120px] h-[180px] object-cover" />
        ) : (
          <img
            className="w-[120px] h-[180px] object-cover"
            src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
            alt=""
          />
        )}
        <div className="flex flex-col justify-center ">
          <h1 className="text-gray-200 font-bold text-[18px]">
            {cast.original_name}
          </h1>
          <p className="text-gray-700 font-bold">{cast.known_for_department}</p>
          <p className="text-gray-400 font-bold opacity-90">{cast.character}</p>
        </div>
      </div>
    </div>
  );
}

export default CastCard;
