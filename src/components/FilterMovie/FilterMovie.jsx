import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BiSolidDownArrow } from "react-icons/bi";
import FilterYears from "./filterYears/FilterYears";
import FilterGenres from "./filterGenres/FilterGenres";
import FilterLanguages from "./filterLanguages/FilterLanguages";
import FilterCountries from "./filterCountries/FilterCountries";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// <AiOutlineRight />

function FilterMovie(props) {
  const [flag, setFlag] = useState(false);
  const [openGenresFilter, setOpenGenresFilter] = useState(false);
  const [openYearsFilter, setOpenYearsFilter] = useState(false);
  const [openLanguagesFilter, setOpenLanguagesFilter] = useState(false);
  const [openCountriesFilter, setOpenCountriesFilter] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div>
      {flag ? (
        <div>
          {flag ? (
            <div
              onClick={() => setFlag(false)}
              className="fixed t-0 l-0 w-full opacity-0 h-full right-0 top-0 z-[5] bg-white"
            ></div>
          ) : null}
          <div className="fixed top-[90px] flex flex-col items-center justify-evenly text-primary z-[6] right-0 w-[200px] h-[250px] bg-black opacity-30 text-primary text-[14px] font-bold hover:opacity-100 rounded-l-md border-2 border-primary transition-all duration-300 ">
            <div>
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setOpenGenresFilter(!openGenresFilter);
                  setOpenCountriesFilter(false);
                  setOpenLanguagesFilter(false);
                  setOpenYearsFilter(false);
                }}
              >
                Genres
                <BiSolidDownArrow className="h-[8px]  w-[8px]" />
              </p>

              {openGenresFilter ? <FilterGenres /> : null}
            </div>
            <div>
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setOpenYearsFilter(!openYearsFilter);
                  setOpenGenresFilter(false);
                  setOpenCountriesFilter(false);
                  setOpenLanguagesFilter(false);
                }}
              >
                Years
                <BiSolidDownArrow className="h-[8px]  w-[8px]" />
              </p>

              {openYearsFilter ? <FilterYears /> : null}
            </div>
            <div>
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setOpenLanguagesFilter(!openLanguagesFilter);
                  setOpenGenresFilter(false);
                  setOpenYearsFilter(false);
                  setOpenCountriesFilter(false);
                }}
              >
                Language
                <BiSolidDownArrow className="h-[8px]  w-[8px]" />
              </p>
              {openLanguagesFilter ? <FilterLanguages /> : null}
            </div>
            <div>
              <p
                className="flex items-center gap-1 cursor-pointer"
                onClick={() => {
                  setOpenCountriesFilter(!openCountriesFilter);
                  setOpenGenresFilter(false);
                  setOpenLanguagesFilter(false);
                  setOpenYearsFilter(false);
                }}
              >
                Country
                <BiSolidDownArrow className="h-[8x]  w-[8px]" />
              </p>
              {openCountriesFilter ? <FilterCountries /> : null}
            </div>

            <div className="flex gap-2">
              <button
                className="bg-black py-[7px] px-[12px] text-gray-500 border border-primary cursor-pointer rounded-md font-bold hover:text-gray-200 hover:bg-primary "
                onClick={() => {
                  navigate("/filteredMovie");
                }}
              >
                Filter
              </button>
              <button className="bg-black py-[7px] px-[12px] text-gray-500 border border-primary cursor-pointer rounded-md font-bold hover:text-gray-200 hover:bg-primary ">
                Reset
              </button>
            </div>
          </div>
          <div className="fixed top-[150px] flex gap-1 text-black rounded-l-lg opacity-20 transition-all duration-300 hover:opacity-100 justify-center items-center z-20 h-[100px]  cursor-pointerw-[30px] right-0 bg-primary">
            <AiOutlineRight
              onClick={() => setFlag(false)}
              className="h-[100px]"
            />
            <div className="text-[11px] flex flex-col  gap-0 font-extrabold">
              <p>F</p>
              <p>I</p>
              <p>L</p>
              <p>T</p>
              <p>E</p>
              <p>R</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed top-[150px] flex gap-1 text-black rounded-l-lg opacity-60 transition-all duration-300 hover:opacity-100 justify-center items-center z-20 h-[100px] w-[30px] right-0 bg-primary">
          <AiOutlineLeft onClick={() => setFlag(true)} className="h-[100px]" />
          <div className="text-[11px] flex flex-col  gap-0 font-extrabold">
            <p>F</p>
            <p>I</p>
            <p>L</p>
            <p>T</p>
            <p>E</p>
            <p>R</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FilterMovie;
