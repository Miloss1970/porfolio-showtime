import { Swiper, SwiperSlide } from "swiper/react";
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
import React, { useEffect, useState } from "react";
import Banner from "../../service/homePage.js";

import ImageComponent from "../ImageComponent/ImageComponent.jsx";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loading from "../../page/loading/Loading";
import HomePageService from "../../service/homePage.js";

function Carousel() {
  const dispatch = useDispatch();
  const { allGenres } = useSelector((state) => state.genresStore);

  const [bannerMovie, setBannerMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    HomePageService.getAllBanner()
      .then((res) => setBannerMovie(res.data.results))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, []);

  return (
    <div className=" mt-[60px] md:mt-[80px]">
      {isLoading ? (
        <Loading />
      ) : (
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          autoplay={{
            delay: 4000,
            waitForTransition: true,
            disableOnInteraction: false,
          }}
          speed={1200}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {bannerMovie?.map((el, i) => {
            let genresArray = el.genre_ids.map((br) => {
              let changedArray = allGenres.find((z) => z.id === br);
              if (changedArray) {
                return changedArray.name;
              } else {
                return "";
              }
            });

            return (
              <SwiperSlide key={i}>
                <Link to={`/detailMovie/${el.id}`}>
                  <ImageComponent el={el} genresArray={genresArray} />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}

export default Carousel;
