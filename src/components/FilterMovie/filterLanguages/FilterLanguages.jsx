import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleLanguages } from "../../../store/FilterSlice";
import "../../../App.css";
import SearchService from "../../../service/SearchService/SearchService";
import { logDOM } from "@testing-library/react";
import { getLanguages } from "../../../store/genresStrore/LanguagesSlice";

function FilterLanguages(props) {
  const dispatch = useDispatch();
  const { allLanguages } = useSelector((state) => state.languagesStore);
  const { languages } = useSelector((state) => state.filterStore);
  // iso_639_1
  //  english_name
  useEffect(() => {
    SearchService.getAllLanguages()
      .then((res) => dispatch(getLanguages(res.data)))
      .catch((err) => console.log(err));
  }, []);

  console.log(languages);

  return (
    <div className="fixed top-[220px]  right-[70px] w-[220px] overflow-y-scroll help overflow-hidden h-[200px] z-2 bg-black text-gray-500 ">
      {allLanguages?.map((language, i) => {
        return (
          <div key={i} className="p-1 ml-[5px] text-[15px]  flex gap-1">
            <input
              type="checkbox"
              checked={languages.includes(language.iso_639_1)}
              onChange={() => dispatch(toggleLanguages(language.iso_639_1))}
            />
            <span>{language.english_name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FilterLanguages;
