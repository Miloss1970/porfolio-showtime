import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsBookmarkPlus } from "react-icons/bs";
import { BiSolidDownArrow } from "react-icons/bi";
import GenresMenu from "../GenresMenu/GenresMenu";
import { useDispatch } from "react-redux";
import { setGenreMenuRespClass } from "../../store/genresStrore/genresSlice";

function RespNavbar({
  searchValue,
  searchMovie,
  openRespMenu,
  setGenreMenuClass,
}) {
  const [openGenresMenu, setOpenGenresMenu] = useState(false);
  const dispatch = useDispatch();
  return (
    <div
      className={
        openRespMenu
          ? "fixed w-[100%] flex flex-col left-0 top-[60px] md:hidden bg-black z-20 p-[10px] transition-all duration-300"
          : "fixed w-[100%] flex flex-col left-0 top-[-115px] md:hidden bg-black z-[-1] p-[10px] transition-all duration-300"
      }
    >
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
        className="flex items-center gap-1 mb-[8px] hover:opacity-50"
        onClick={() => {
          setOpenGenresMenu(!openGenresMenu);
          dispatch(setGenreMenuRespClass());
        }}
      >
        Genres{" "}
        <span>
          <BiSolidDownArrow className="text-[12px]" />
        </span>
      </Link>
      <div>{openGenresMenu ? <GenresMenu /> : null}</div>

      <div className="flex gap-2 w-full border border-primary rounded-lg">
        <button className="bg-gray-500 rounded-l-lg text-[18px]  text-black p-2 font-bold ">
          All
        </button>
        <input
          className="bg-transparent outline-none text-[18px]"
          type="text"
          placeholder="search SHOWTIME"
          value={searchValue}
          onChange={searchMovie}
        />
      </div>
    </div>
  );
}

export default RespNavbar;
