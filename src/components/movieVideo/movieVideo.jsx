import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";

function MovieVideo({ movie, setFlag }) {
  return (
    <div className=" fixed w-[60%] h-[80%] top-[50%] mt-3 left-[50%] overflow-hidden transform translate-x-[-50%] translate-y-[-50%] text-gray-500 bg-black  z-[5] ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 g-2 p-[5px]  ">
        {movie.results?.slice(0, 9).map((el, i) => {
          return (
            <iframe
              key={i}
              className="w-[100%] h-[100%]"
              src={`https://www.themoviedb.org/video/play?key=${el.key}`}
              frameBorder="0"
              allowFullScreen={true}
            ></iframe>
          );
        })}
      </div>
      <AiOutlineClose
        onClick={() => {
          setFlag(false);
          document.documentElement.style.overflow = "auto";
        }}
        className="text-primary absolute top-2 hover:opacity-50  text-[25px] font-bold right-2 w-6 h-6"
      />
    </div>
  );
}

export default MovieVideo;
