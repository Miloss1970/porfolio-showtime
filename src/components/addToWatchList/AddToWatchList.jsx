import React, { useState } from "react";
import { BsBookmarkPlus, BsBookmarkXFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import {
  addCard,
  addMovie,
  removeCard,
} from "../../store/genresStrore/LanguagesSlice";

function AddToWatchList({ filmCard }) {
  const [flag, setFlag] = useState(false);
  const [addToWatchList, setAddToWatchList] = useState(true);
  const dispatch = useDispatch();

  return (
    <div>
      {addToWatchList ? (
        flag ? (
          <span className=" bg-primary w-[80px] text-black text-[12px]  font-extrabold absolute top-[-20px] left-[50px] rounded-lg p-[5px]  z-20 transition-all duration-300">
            Add to WatchList
          </span>
        ) : null
      ) : flag ? (
        <span className=" bg-primary w-[80px] text-black text-[12px]  font-extrabold absolute top-[-20px] left-[50px] rounded-lg p-[5px]  z-20 transition-all duration-300">
          Remove from WatchLIst
        </span>
      ) : null}
      <p
        className="bg-primary bg-opacity-70 text-black inline-block hover:opacity-100  absolute top-0 left-0  text-[25px] p-[5px] z-20 transition-all duration-500"
        onMouseOver={() => setFlag(true)}
        onMouseOut={() => setFlag(false)}
      >
        {addToWatchList ? (
          <BsBookmarkPlus
            onClick={(e) => {
              setAddToWatchList(false);
              e.preventDefault();
              dispatch(addCard());
              dispatch(addMovie(filmCard));
            }}
          />
        ) : (
          <BsBookmarkXFill
            onClick={() => {
              setAddToWatchList(true);
              dispatch(removeCard());
            }}
          />
        )}
      </p>
    </div>
  );
}

export default AddToWatchList;
