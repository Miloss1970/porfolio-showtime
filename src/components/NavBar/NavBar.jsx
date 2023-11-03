import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import GenresMenu from "../GenresMenu/GenresMenu";
import SearchMovie from "../SearchMovie/SearchMovie";
import faa from "../FilterMovie/FilterMovie";
import SearchService from "../../service/SearchService/SearchService";
import genres from "../../service/Genres/Genres";
import { useDispatch, useSelector } from "react-redux";
import FilterYears from "../FilterMovie/filterYears/FilterYears";
import FilterMovie from "../FilterMovie/FilterMovie";
import Genres from "../../service/Genres/Genres";
import {
  getGenres,
  setGenreMenuClass,
} from "../../store/genresStrore/genresSlice";
import RespNavbar from "../respNavbar/RespNavbar";

function NavBar(props) {
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);
  const [openRespMenu, setOpenRespMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [openGenresMenu, setOpenGenresMenu] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    Genres.getAllGenres()
      .then((res) => dispatch(getGenres(res.data.genres)))
      .catch((err) => console.log(err));
  }, []);

  //
  function handleOpeMenu() {
    setOpenSearch(true);
    setFlag(false);
  }

  function searchMovie(e) {
    setSearchValue(e.target.value);
  }

  function handleCloseMenu() {
    setOpenSearch(false);
  }

  return (
    <div>
      <FilterMovie />
      <nav className="text-primary fixed inset-0 z-[99] flex justify-between w-full bg-black h-[60px] md:h-[80px] border-b border-b-red-600 items-center p-[20px]">
        {openSearch ? (
          <div
            onClick={handleCloseMenu}
            className="fixed t-0 l-0 w-full opacity-0 h-full right-0 top-0 z-[5] bg-white"
          ></div>
        ) : null}
        {openGenresMenu ? (
          <div
            onClick={() => setOpenGenresMenu(false)}
            className="fixed t-0 l-0 w-full opacity-0 h-full right-0 top-0 z-[5] bg-white"
          ></div>
        ) : null}
        {openGenresMenu ? <GenresMenu /> : null}

        <div>
          <Link to="/" className="font-bold text-[25px] hover:opacity-50 ">
            SHOWTIME
          </Link>
        </div>
        <div className="flex items-center gap-4 hidden md:flex">
          <Link
            className="flex items-center gap-1 hover:opacity-50"
            to="/watchList"
          >
            WatchList{" "}
            <span>
              <BsBookmarkPlus />
            </span>
          </Link>
          <Link
            className="flex items-center gap-1 hover:opacity-50"
            onClick={() => {
              setOpenGenresMenu(true);
              dispatch(setGenreMenuClass());
            }}
          >
            Genres{" "}
            <span>
              <BiSolidDownArrow />
            </span>
          </Link>

          {openSearch ? (
            <div className="flex items-center justify-between gap-2 z-[5] transition-all duration-1000 border rounded-lg border-primary w-[400px]">
              <input
                className="bg-transparent outline-none p-2  h-[40px] text-[18px]"
                type="text"
                placeholder="search Movie"
                value={searchValue}
                onChange={searchMovie}
              />

              <AiOutlineSearch className="text-gray-500 text-[25px] hover:text-primary mr-3 " />
            </div>
          ) : (
            <AiOutlineSearch
              className="text-gray-500 text-[25px]  hover:text-primary "
              onClick={handleOpeMenu}
            />
          )}
        </div>

        <AiOutlineMenu
          className=" w-[35px] h-[25px] z-10 md:hidden"
          onClick={() => {
            setFlag(true);
            setOpenRespMenu(!openRespMenu);
          }}
        />
        <RespNavbar
          openRespMenu={openRespMenu}
          searchMovie={searchMovie}
          setGenreMenuClass={setGenreMenuClass}
        />
      </nav>
      <SearchMovie
        flag={flag}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
    </div>
  );
}

export default NavBar;
