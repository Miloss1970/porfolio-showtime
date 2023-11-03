import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

function DetailMovieImg({ movieImages }) {
  return (
    <div>
      <Swiper
        className="w-[100%] mt-[20px] "
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        spaceBetween={5}
        slidesPerView={1}
        mousewheel={true}
      >
        {movieImages?.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img
                className=" w-[100%]"
                src={`https://image.tmdb.org/t/p/original${img.file_path}`}
                alt=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default DetailMovieImg;
