import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCountries, toggleLanguages } from "../../../store/FilterSlice";
import "../../../App.css";
import SearchService from "../../../service/SearchService/SearchService";

import { getCountries } from "../../../store/genresStrore/Countries.Slice";

function FilterCountries(props) {
  const dispatch = useDispatch();
  const { allCountries } = useSelector((state) => state.countriesStore);
  const { countries } = useSelector((state) => state.filterStore);

  useEffect(() => {
    SearchService.getAllCountries()
      .then((res) => dispatch(getCountries(res.data)))
      .catch((err) => console.log(err));
  }, []);

  console.log(allCountries);
  return (
    <div className="fixed top-[260px]  right-[70px] w-[220px] overflow-y-scroll help overflow-hidden h-[200px] z-[10] bg-black text-gray-500 ">
      {allCountries?.map((country, i) => {
        return (
          <div key={i} className="p-1 ml-[5px] text-[15px]  flex gap-1">
            <input
              type="checkbox"
              checked={countries.includes(country.iso_3166_1)}
              onChange={() => dispatch(toggleCountries(country.iso_3166_1))}
            />
            <span>{country.english_name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default FilterCountries;
