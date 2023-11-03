import React, { useEffect, useState } from "react";
import { BsBookmarkPlus, BsBookmarkX, BsBookmarkXFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { addCard, removeCard } from "../../store/genresStrore/LanguagesSlice";
import {
  addMovie,
  deletedCard,
} from "../../store/watchListMovieStore/WatchListMovieSlice";

function Card({ filmCard }) {
  const navigate = useNavigate();
  const [flag, setFlag] = useState(false);

  const dispatch = useDispatch();

  function deleteMovie() {
    filmCard = { ...filmCard, watchList: false };
    dispatch(deletedCard(filmCard));
    dispatch(removeCard);
  }

  function addToWatchList(e) {
    if (e.target.closest(".watchList")) return;
    navigate(`/detailMovie/${filmCard.id}`);
  }

  return (
    <div onClick={addToWatchList} className="relative">
      <div className="w-full h-[500x]   hover:opacity-60 hover:scale-[1.02] transition-all duration-300 webkit-box border-b-4 border-primary rounded-b-md  ">
        <img
          className="rounded-t-md"
          src={`https://image.tmdb.org/t/p/original${filmCard.poster_path}`}
          alt=""
        />
        <div>
          <p
            className="bg-primary bg-opacity-70 watchList text-black inline-block  absolute top-0 left-0  text-[25px] p-[5px] z-10 transition-all duration-500"
            onMouseOver={() => setFlag(true)}
            onMouseOut={() => setFlag(false)}
          >
            {filmCard.watchList ? (
              <span>
                <BsBookmarkX onClick={deleteMovie} />
                {flag ? (
                  <span className=" bg-primary w-[80px] text-black text-[12px]  font-extrabold absolute top-[-20px] left-[50px] rounded-lg p-[5px]  z-20 transition-all duration-300">
                    Remove from WatchList
                  </span>
                ) : null}
              </span>
            ) : (
              <span>
                <BsBookmarkPlus
                  onClick={() => {
                    filmCard = { ...filmCard, watchList: true };
                    dispatch(addCard);
                    dispatch(addMovie(filmCard));
                  }}
                />
                {flag ? (
                  <span className=" bg-primary w-[80px] text-black text-[12px]  font-extrabold absolute top-[-20px] left-[50px] rounded-lg p-[5px]  z-20 transition-all duration-300">
                    Add to WatchList
                  </span>
                ) : null}
              </span>
            )}
          </p>
        </div>

        <p className="text-gray-200 bg-black bg-opacity-70 p-[8px] absolute top-0 right-0  w-[45px] h-[45px] border  border-4 border-green-500 rounded-full flex justify-center items-center  font-bold text-[12px]">
          <span className="text-yellow-400 text-[8px]">
            <AiFillStar />
          </span>
          {filmCard.vote_average.toFixed(1)}
        </p>

        <div className=" webkit">
          <h1 className="text-red-700 text-[20px] font-bold">
            {filmCard.title}{" "}
            <span className="text-gray-800">
              ({filmCard.release_date?.slice(0, 4)})
            </span>
          </h1>
          <p className="text-gray-500 webkit-box overflow-hidden text-[16px] mt-[8px] h-[70px] text-start font-bold">
            {filmCard.overview}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
