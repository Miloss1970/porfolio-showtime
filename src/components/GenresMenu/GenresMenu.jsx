import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";

function GenresMenu() {
  const { allGenres, genreMenuClass } = useSelector(
    (state) => state.genresStore,
  );
  useEffect(() => {}, []);
  return (
    <div
      className={
        genreMenuClass
          ? " w-[100%] h-[200px] py-[20px] z-20 overflow-hidden overflow-y-scroll help"
          : "bg-black absolute top-[50px] right-[30px] w-[150px] h-[200px] z-20 overflow-hidden overflow-y-scroll help "
      }
    >
      <ul>
        {allGenres?.map((el, i) => {
          return (
            <li
              key={i}
              className="text-gray-500 font-bold hover:bg-primary p-[5px]"
            >
              <Link
                to={`/${el?.name.toLowerCase().split(" ")[0]}Movie/${el.id}`}
              >
                {el.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GenresMenu;
