import React, { useEffect, useState } from "react";
import Banner from "../../service/homePage.js";
import { useNavigate, useSearchParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination.jsx";
import Card from "../../components/Card/Card.jsx";
import { retry } from "@reduxjs/toolkit/query";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { IoReturnDownBackOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import searchService from "../../service/SearchService/SearchService";
import { useSelector } from "react-redux";
import Loading from "../loading/Loading";

function TrendingFilms(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filmCards, setFilmCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { addedMovies } = useSelector((state) => state.watchListStore);
  const navigation = useNavigate();

  useEffect(() => {
    let page = searchParams.get("page") ? searchParams.get("page") : 1;

    Banner.getTrendingMovie(page)
      .then((res) => {
        setFilmCards(res.data);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [setSearchParams]);
  let watchListArray = searchService.getWatchArray(filmCards, addedMovies);
  return (
    <div className="">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <NavBar />
          <div className="p-[80px]">
            <p
              className="flex items-center cursor-pointer mt-[10px] w-[120px] py-[5px] bg-black border border-primary text-[16px] hover:opacity-70 font-bold rounded-lg text-gray-500"
              onClick={() => navigation("/")}
            >
              <IoMdArrowRoundBack />
              <span> Home page</span>
            </p>
            <h1 className="text-gray-200 flex  flex-col sm:flex-row justify-center text-[30px] font-bold mb-[20px]">
              Trending Movies{" "}
              <span className="text-gray-500">
                ({filmCards.total_results?.toLocaleString("en-US")})
              </span>
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px]">
              {watchListArray?.map((filmCard, i) => {
                return <Card key={i} filmCard={filmCard} />;
              })}
            </div>
          </div>

          <Pagination count={filmCards.total_results} />
        </>
      )}
    </div>
  );
}

export default TrendingFilms;
