import React, { useState } from "react";
import profileImg from "../../assets/profile.jpg";
import moment from "moment";
import { FaStar } from "react-icons/fa";
import "../../App.css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function ReviewCard({ review }) {
  const [flag, setFlag] = useState(true);

  return (
    <div
      className={
        flag
          ? " h-[150px] border-b-4 rounded-md border-primary overflow-hidden"
          : "border-b-4 rounded-md  border-primary pb-[10px] "
      }
    >
      {review.author_details.avatar_path === null ? (
        <img
          src={profileImg}
          className="w-[100px] h-[100px] float-left  object-cover shape-outside rounded-full"
        />
      ) : (
        <img
          className="w-[100px] h-[100px] float-left shape-outside  object-cover rounded-full"
          src={`https://image.tmdb.org/t/p/original${review.author_details.avatar_path}`}
          alt=""
        />
      )}
      <div className="relative">
        <h1 className="text-primary mb-[5px] font-bold">{review.author}</h1>
        <p className="text-gray-700 font-bold mb-[5px]">
          {moment(review.created_at).format("MMM D,YYYY")}
        </p>
        <p className="flex gap-2 items-center mb-[5px] text-gray-200 font-bold">
          <FaStar className="text-yellow-400" />{" "}
          <span>{review.author_details.rating}/10</span>
        </p>

        <article className="opacity-70  rounded-md pr-[20px] font-bold">
          {review.content}
        </article>

        {review.content.length > 300 ? (
          flag ? (
            <IoIosArrowDown
              onClick={() => setFlag(false)}
              className="text-primary absolute hover:opacity-70 cursor-pointer text-[30px]    top-[120px] right-[5px]"
            />
          ) : (
            <IoIosArrowDown
              onClick={() => setFlag(true)}
              className="text-primary rotate-180 absolute hover:opacity-70 cursor-pointer bottom-0 right-1 text-[30px] font-bold "
            />
          )
        ) : null}
      </div>
    </div>
  );
}

// moment().format('MMM D, YYYY')

export default ReviewCard;
