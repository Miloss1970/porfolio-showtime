import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleYears } from "../../../store/FilterSlice";
import "../../../App.css";

function FilterYears(props) {
  const dispatch = useDispatch();
  const { years } = useSelector((state) => state.filterStore);

  //
  const yearsMovie = Array.from(
    { length: 2023 - 1900 + 1 },
    (_, index) => 2023 - index,
  );

  return (
    <div className="fixed top-[175px] text-primary right-[70px] w-[150px] overflow-y-scroll help overflow-hidden h-[200px] z-2 bg-black p-[10px] ">
      {yearsMovie?.map((year) => (
        <div key={year} className="p-1 ml-[5px] text-[17px] flex gap-1">
          <input
            type="checkbox"
            checked={years.includes(year)}
            onChange={() => dispatch(toggleYears(year))}
          />
          <span>{year}</span>
        </div>
      ))}
    </div>
  );
}

export default FilterYears;
