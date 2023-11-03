import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import ActorService from "../../../service/ActorService/ActorService";

function ActorImage({ id }) {
  const [actorImages, setActorImages] = useState([]);
  useEffect(() => {
    ActorService.getActionImages(id)
      .then((res) => setActorImages(res.data.profiles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className=" fixed  w-[60%] md:w-[50%] lg:w-[30%] h-[100%] bg-white top-[50%]  left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-[99]">
      <Swiper
        className="w-[100%]  h-[100%]"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        spaceBetween={5}
        slidesPerView={1}
        mousewheel={true}
      >
        {actorImages?.map((img, i) => {
          if (img.file_path === null) return;
          return (
            <SwiperSlide key={i}>
              <img
                className=" h-[100%] w-[100%] object-cover"
                src={`https://image.tmdb.org/t/p/original/${img.file_path}`}
                alt="Recomended-img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ActorImage;
