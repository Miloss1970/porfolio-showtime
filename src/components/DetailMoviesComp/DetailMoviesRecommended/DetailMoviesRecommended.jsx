import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";

function DetailMoviesRecommended({ movieRecommended }) {
  const navigation = useNavigate();
  return (
    <div className="mt-[40px]">
      {movieRecommended.length > 0 ? (
        <>
          <h1 className="text-gray-200 font-bold text-[20px]">
            Recommended Movies
          </h1>
          <Swiper
            className="w-[100%] mt-[10px] h-[250px] md:h-[350px]"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            spaceBetween={5}
            slidesPerView={4.5}
            mousewheel={true}
          >
            {movieRecommended?.map((img, i) => {
              if (img.backdrop_path === null) return;
              return (
                <SwiperSlide key={i}>
                  <img
                    className="h-[250px] md:h-[350px] hover:scale-105 transition-all duration-300 object-cover w-[100%]"
                    src={`https://image.tmdb.org/t/p/original/${img.backdrop_path}`}
                    alt="Recomended-img"
                    onClick={() => {
                      navigation(`/detailMovie/${img.id}`);
                      location.reload();
                    }}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : null}
    </div>
  );
}

export default DetailMoviesRecommended;
