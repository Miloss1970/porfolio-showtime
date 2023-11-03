import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleGenres, toggleYears } from "../../../store/FilterSlice";
import "../../../App.css";

function FilterGenres(props) {
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.filterStore);
  const { allGenres } = useSelector((state) => state.genresStore);

  console.log(genres);

  return (
    <div className="fixed top-[130px] text-gray-500 right-[70px] w-[150px] overflow-y-scroll help overflow-hidden h-[200px] z-2 bg-black p-[10px] ">
      {allGenres?.map((genre) => (
        <div key={genre.id} className="p-1 ml-[5px] text-[17px] flex gap-1">
          <input
            type="checkbox"
            checked={genres.includes(genre.id)}
            onChange={() => dispatch(toggleGenres(genre.id))}
          />
          <span>{genre.name}</span>
        </div>
      ))}
    </div>
  );
}

export default FilterGenres;
