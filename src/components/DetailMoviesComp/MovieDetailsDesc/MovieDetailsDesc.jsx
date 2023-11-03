import React, { useState } from "react";
import { BsBookmarkPlus, BsBookmarkXFill } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import moment from "moment/moment.js";
import { Link } from "react-router-dom";
import videoImg from "../../../assets/videosRed.png";
import { useDispatch, useSelector } from "react-redux";
import { removeCard } from "../../../store/genresStrore/LanguagesSlice";
import {
  addMovie,
  deletedCard,
} from "../../../store/watchListMovieStore/WatchListMovieSlice";

function MovieDetailsDesc({ movieDetails, movieVideos, setFlag }) {
  const dispatch = useDispatch();
  const [addToCard, setAddToCard] = useState(false);
  const { addedMovies } = useSelector((state) => state.watchListStore);
  let niz = addedMovies.filter((el) => el.id === movieDetails.id);

  return (
    <div className="mt-3 relative my-[20px]">
      <h1 className="text-primary font-bold text-[30px]">
        {movieDetails.title}{" "}
        <span className="text-gray-200 text-[20px]">
          ({movieDetails.original_title})
        </span>
      </h1>
      <p className="text-gray-500 mb-4">{movieDetails.overview}</p>

      <div className="flex flex-col md:flex-row gap-2 ">
        <div className=" w-full md:w-[50%] flex flex-col  justify-between ">
          {niz.length > 0 ? (
            <p
              className="flex items-center gap-2 font-bold cursor-pointer hover:opacity-50 text-primary text-[20px] "
              onClick={() => {
                movieDetails = { ...movieDetails, watchList: false };
                setAddToCard(false);
                dispatch(deletedCard(movieDetails));
              }}
            >
              Remove from Watchlist{" "}
              <span>
                <BsBookmarkXFill />
              </span>
            </p>
          ) : (
            <p
              className="flex items-center gap-2 font-bold cursor-pointer hover:opacity-50 text-primary text-[20px] "
              onClick={() => {
                movieDetails = { ...movieDetails, watchList: true };
                setAddToCard(true);
                dispatch(addMovie(movieDetails));
              }}
            >
              Add to Watchlist{" "}
              <span>
                <BsBookmarkPlus />
              </span>
            </p>
          )}

          <p className="flex  items-center gap-2 font-bold text-[20px] ">
            <FaStar className="text-yellow-400" /> Raiting:{" "}
            <span className="text-gray-500">
              {movieDetails.vote_average?.toFixed(1)}
            </span>
          </p>
          <p className="text-[20px] text-gray-200 font-bold">
            Genres:{" "}
            {movieDetails.genres?.map((el, i) => {
              return (
                <Link
                  to={`/${el?.name.toLowerCase().split(" ")[0]}Movie/${el.id}`}
                  className="text-primary hover:opacity-50 cursor-pointer "
                  key={i}
                >
                  {el.name}
                  <span className="text-gray-500">
                    {i === movieDetails.genres.length - 1 ? "" : ", "}
                  </span>
                </Link>
              );
            })}{" "}
          </p>

          <p className="text-gray-200 text-[20px] font-bold">
            Runtime:{" "}
            <span className="text-gray-500">{movieDetails.runtime}</span>
          </p>
          <p className="text-gray-200 text-[20px] font-bold">
            Status: <span className="text-gray-500">{movieDetails.status}</span>
          </p>

          <p className="text-gray-200 text-[20px] font-bold">
            Release date:{" "}
            <span className="text-gray-500">
              {moment(movieDetails.release_date).format("MMMM D, ")}
              <Link className="text-primary">
                {moment(movieDetails.release_date).format("YYYY")}
              </Link>
            </span>
          </p>

          <p className="text-gray-200 text-[20px] font-bold">
            Production counrties:{" "}
            {movieDetails.production_countries?.map((el, i) => {
              return (
                <span key={i} className="text-primary ">
                  {el.name}
                </span>
              );
            })}
          </p>

          <p className="text-gray-200 text-[20px] font-bold">
            Production companies:{" "}
            {movieDetails.production_companies?.map((el, i) => {
              return (
                <span key={i} className="text-primary ">
                  {el.name}
                  <span className="text-gray-500">
                    {i === movieDetails.production_companies.length - 1
                      ? ""
                      : ", "}
                  </span>
                </span>
              );
            })}
          </p>
        </div>

        <div className="w-[50%]">
          <div
            onClick={() => {
              setFlag(true);
              document.documentElement.style.overflow = "hidden";
            }}
            className="w-[300px] border border-primary blur-[5px] transition-all duration-500 hover:blur-0 h-[300px] relative bg- mx-auto flex flex-wrap overflow-hidden border-primary"
          >
            {movieVideos.results?.slice(0, 9).map((el, i) => {
              return (
                <iframe
                  key={i}
                  className="w-[149px]  transition-all duration-500 h-[149px]"
                  src={`https://www.themoviedb.org/video/play?key=${el.key}`}
                  frameBorder="0"
                ></iframe>
              );
            })}
            <div className="absolute    inset-0 w-[100%]   h-[100%]  bg-white bg-opacity-50 "></div>
            <div className="absolute z-22  flex flex-col justify-center items-center inset-0 w-[100%]  h-[100%]">
              <h2 className="text-primary blur-0  font-bold text-[25px]">
                Show Videos
              </h2>
              <img className="w-[50px] blur-0 h-[50px]" src={videoImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetailsDesc;
