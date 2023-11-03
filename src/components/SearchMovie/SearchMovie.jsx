import React, { useEffect, useState } from "react";
import SearchService from "../../service/SearchService/SearchService";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { logDOM } from "@testing-library/react";
import profileImg from "../../assets/profile.jpg";
import "../../App.css";

function SearchMovie({ searchValue, flag, setSearchValue }) {
  const [searchMovie, setSearchMovie] = useState([]);
  let page = 1;
  let navigation = useNavigate();
  useEffect(() => {
    SearchService.getSearchMovie(searchValue, page)
      .then((res) => setSearchMovie(res.data.results))
      .catch((err) => console.log(err));
  }, [searchValue]);
  return (
    <div
      className={
        flag
          ? "fixed w-[100%] p-[0px] h-fit-content overflow-hidden  bg-black  top-[175px] z-[100]"
          : "fixed w-[100%] p-[0px]  bg-black h-fit-content overflow-hidden  top-[80px] z-[100]"
      }
    >
      {searchMovie.map((el, i) => {
        if (el.backdrop_path) {
          return (
            <div
              onClick={() => {
                navigation(`/detailMovie/${el.id}`);
                setSearchValue("");
              }}
            >
              <div className="h-[150px] mousehover p-[5px] border-b-2 border-primary flex gap-[20px]">
                {el.backdrop_path === null || el.backdrop_path === "" ? (
                  <img
                    className="h-[100%] w-[150px] object-cover"
                    src={profileImg}
                    alt=""
                  />
                ) : (
                  <img
                    className="h-[100%] w-[150px] object-cover"
                    src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                    alt=""
                  />
                )}

                <div className="flex flex-col justify-center">
                  <h1 className="text-gray-500 font-bold text-[25px]">
                    {el.title}
                  </h1>
                  <small className="text-gray-700">Movie</small>
                </div>
              </div>
              // backdrop_path
            </div>
          );
        }
      })}
    </div>
  );
}

export default SearchMovie;
