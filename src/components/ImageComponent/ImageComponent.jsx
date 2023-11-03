import React from "react";
import Star from "../Star/Star.jsx";
import NavBar from "../NavBar/NavBar";
import FilterMovie from "../FilterMovie/FilterMovie";

function ImageComponent({ el, genresArray }) {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full h-full bg-black z-2 opacity-20"></div>
        <img
          className="w-[100%] object-cover "
          src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
          alt=""
        />

        <div className="absolute w-full md:w-[80%] top-[40%] left-[5%] p-[30px]">
          <h1 className="font-bold text-primary  text-[20px] sm:text-[30px] md:text-[50px]">
            {el.title}
          </h1>

          <Star star={el.vote_average} />
          <ul className="flex gap-2 my-[20px]">
            {genresArray.map((gen, i) => {
              return (
                <li
                  key={i}
                  className="text-white text-gray-800 py-[2px] px-[8px] rounded-lg text-[12px] sm:text-[16px] md:text-[18px] cursor-pointer  hover:scale-105 font-bold bg-gray-500"
                >
                  {gen}
                </li>
              );
            })}
          </ul>
          <p className="font-bold hidden lg:inline-block text-gray-200 pb-[20px]">
            {el.overview.substring(0, 120)}...
          </p>
        </div>
      </div>
    </div>
  );
}

export default ImageComponent;
