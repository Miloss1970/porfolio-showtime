import React, { useEffect, useState } from "react";
import Banner from "../../service/homePage.js";
import { Link, useSearchParams } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { IoIosArrowForward } from "react-icons/io";
import Loading from "../../page/loading/Loading";

function HomeFilms({ images, title, isLoading }) {
  const [flag, setFlag] = useState(false);

  return (
    <div className="my-[50px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {flag ? (
            <Link
              to={`${title.split(" ")[0].toLowerCase()}Movie`}
              onMouseOut={() => {
                setFlag(false);
              }}
              className="text-gray-200  gap-2 flex text-primary transition-all duration-500 font-bold items-center text-[20px] mb-2.5 "
            >
              {title}
              <p className="text-[12px] text-gray-700 pb-[2px] ">Expore all</p>
              <span className="font-bold">
                <IoIosArrowForward className="text-[30px] rotate-45 pt-[5px]" />
              </span>
            </Link>
          ) : (
            <div
              onMouseOver={() => {
                setFlag(true);
              }}
              className="text-gray-200  flex gap-[2px] transition duration-500 items-center font-bold mb-2.5 text-[20px]"
            >
              <p>{title}</p>
              <span>
                <IoIosArrowForward className="text-[30px]  pt-[5px]" />
              </span>
            </div>
          )}

          <Swiper
            className="w-[100%] h-[200px] md:h-[300px] lg:h-[450px] "
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            spaceBetween={5}
            slidesPerView={3.5}
            mousewheel={true}
          >
            {images?.map((img, i) => {
              return (
                <SwiperSlide key={i}>
                  <Link to={`/detailMovie/${img.id}`}>
                    <img
                      className="object-cover object-center  hover:scale-105 w-[100%] h-[100%] "
                      src={`https://image.tmdb.org/t/p/original${img.poster_path}`}
                      alt=""
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      )}
    </div>
  );
}

export default HomeFilms;
