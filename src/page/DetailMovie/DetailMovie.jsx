import React, { useEffect, useState } from "react";

import NavBar from "../../components/NavBar/NavBar.jsx";

import { Link, useParams } from "react-router-dom";
import DetailMovieService from "../../service/DetailMovieService/DetailMovieService.js";

import MovieVideo from "../../components/movieVideo/movieVideo.jsx";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import DetailMovieImg from "../../components/DetailMoviesComp/DetailMovieImg/DetailMovieImg.jsx";
import MovieDetailsDesc from "../../components/DetailMoviesComp/MovieDetailsDesc/MovieDetailsDesc.jsx";
import DetailMoviesRecommended from "../../components/DetailMoviesComp/DetailMoviesRecommended/DetailMoviesRecommended.jsx";
import DetailMovieCast from "../../components/DetailMoviesComp/DetailMovieCast/DetailMovieCast.jsx";
import DetailMovieReviews from "../../components/DetailMoviesComp/DetailMoviesReview/DetailMovieReviews.jsx";
import Loading from "../loading/Loading";
import { useSelector } from "react-redux";

function DetailMovie(props) {
  const [movieDetails, setMovieDetails] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [movieImages, setMovieImages] = useState([]);
  const [movieVideos, setMovieVideos] = useState([]);
  const [movieRecommended, setMovieRecommended] = useState([]);
  const [movieReviews, setMovieReviews] = useState([]);
  const [flag, setFlag] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { addedMovies } = useSelector((state) => state.languagesStore);
  const { id } = useParams();

  function smoothScroll(e) {
    e.preventDefault();

    let id = e.target.getAttribute("href");

    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
    });
  }

  useEffect(() => {
    DetailMovieService.getDetailMovie(id)
      .then((res) => setMovieDetails(res.data))
      .catch((err) => console.log(err));
    DetailMovieService.getMovieCast(id)
      .then((res) => setMovieCast(res.data.cast))
      .catch((err) => console.log(err));

    DetailMovieService.getMovieImages(id)
      .then((res) => setMovieImages(res.data.backdrops))
      .catch((err) => console.log(err));

    DetailMovieService.getMovieVideos(id)
      .then((res) => setMovieVideos(res.data))
      .catch((err) => console.log(err));

    DetailMovieService.getMovieRecommended(id)
      .then((res) => setMovieRecommended(res.data.results))
      .catch((err) => console.log(err));

    DetailMovieService.getMovieReviews(id)
      .then((res) => setMovieReviews(res.data.results))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, []);

  return (
    <div className="text-gray-200 relative">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          {flag ? (
            <div className=" absolute w-[100%] inset-0 text-gray-500 bg-black bg-opacity-60 backdrop-filter backdrop-blur-md  h-[100%] bg-white z-[5] "></div>
          ) : null}
          {flag ? <MovieVideo movie={movieVideos} setFlag={setFlag} /> : null}

          <div className="py-[50px] mt-[80px] px-[10%] sm:px-[80px] overflow-x-hidden">
            <div className="flex justify-between ">
              <a
                href="detailMovies"
                onClick={smoothScroll}
                className="  text-[12px] md:text-[16px] lg:text-[20px] font-bold text-primary   hover:opacity-50"
              >
                Movie Details
              </a>
              <a
                href="recommendedMovies"
                onClick={smoothScroll}
                className="  text-[12px] md:text-[16px] lg:text-[20px] font-bold text-primary   hover:opacity-50"
              >
                Recommended Movies
              </a>
              <a
                href="cast"
                onClick={smoothScroll}
                className="  text-[12px] md:text-[16px] lg:text-[20px] font-bold text-primary  hover:opacity-50"
              >
                Cast
              </a>
              <a
                href="review"
                onClick={smoothScroll}
                className="  text-[12px] md:text-[16px] lg:text-[20px] font-bold text-primary   hover:opacity-50"
              >
                Reviews
              </a>
            </div>

            <DetailMovieImg movieImages={movieImages} />

            <div id="detailMovies">
              <MovieDetailsDesc
                movieDetails={movieDetails}
                movieVideos={movieVideos}
                setFlag={setFlag}
              />
            </div>
            <div id="recommendedMovies">
              <DetailMoviesRecommended movieRecommended={movieRecommended} />
            </div>
            <div id="cast">
              <DetailMovieCast movieCast={movieCast} />
            </div>
            <div id="review">
              <DetailMovieReviews movieReviews={movieReviews} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default DetailMovie;
