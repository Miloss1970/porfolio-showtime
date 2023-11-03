import React, { useEffect, useState } from "react";
import ActorService from "../../../service/ActorService/ActorService";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import { Link } from "react-router-dom";

function ActorAppears({ id }) {
  const [actorAppearsMovie, setActorAppearsMovie] = useState([]);
  // backdrop_path
  useEffect(() => {
    ActorService.getActionAppears(id)
      .then((res) => setActorAppearsMovie(res.data.cast))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="mb-[20px]">
      {actorAppearsMovie.length > 0 ? (
        <>
          <h1 className="text-gray-200 font-bold text-[20px]">
            Appears in Movie
          </h1>
          <Swiper
            className="w-[100%] mt-[10px] h-[200px] md:h-[300px]"
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            navigation
            spaceBetween={5}
            slidesPerView={4.5}
            mousewheel={true}
          >
            {actorAppearsMovie?.map((img, i) => {
              if (img.backdrop_path === null) return;
              return (
                <SwiperSlide key={i}>
                  <Link to={`/detailMovie/${img.id}`}>
                    <img
                      className="h-[200px] md:h-[300px] hover:scale-105 transition-all duration-300 object-cover w-[100%]"
                      src={`https://image.tmdb.org/t/p/original/${img.backdrop_path}`}
                      alt="Recomended-img"
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </>
      ) : null}
    </div>
  );
}

export default ActorAppears;
