import React, { useEffect, useState } from "react";
import HomeFilms from "../HomeFilms/HomeFilms.jsx";
import Loading from "../../page/loading/Loading";
import HomePageService from "../../service/homePage.js";

function AllHomeFilms(props) {
  const [trendingImages, setTrendingImages] = useState([]);
  const [nowPlayingImages, setNowPlayingImages] = useState([]);
  const [topRatedImages, setTopRatedImages] = useState([]);
  const [popularImages, setPopularImages] = useState([]);
  const [upComingImages, setUpComingImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filmTitles, setFilmTitles] = useState({
    trending: "Trending Movies",
    nowPlaying: "Now Playing Movies",
    topRated: "Top Rated Movies",
    popular: "Popular Movies",
    upComing: "Upcoming Movies",
  });
  let page = 1;

  useEffect(() => {
    HomePageService.getTrendingMovie(page)
      .then((res) => setTrendingImages(res.data.results))
      .catch((err) => console.log(err));

    HomePageService.getNowPlaying(page)
      .then((res) => setNowPlayingImages(res.data.results))
      .catch((err) => console.log(err));

    HomePageService.getTopRated(page)
      .then((res) => setTopRatedImages(res.data.results))
      .catch((err) => console.log(err));

    HomePageService.getPopular(page)
      .then((res) => setPopularImages(res.data.results))
      .catch((err) => console.log(err));

    HomePageService.getUpComing(page)
      .then((res) => setUpComingImages(res.data.results))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, []);
  return (
    <div className="px-[80px]">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <HomeFilms
            images={trendingImages}
            isLoading={isLoading}
            title={filmTitles.trending}
          />
          <HomeFilms
            images={nowPlayingImages}
            isLoading={isLoading}
            title={filmTitles.nowPlaying}
          />
          <HomeFilms
            images={topRatedImages}
            isLoading={isLoading}
            title={filmTitles.topRated}
          />
          <HomeFilms
            images={popularImages}
            isLoading={isLoading}
            title={filmTitles.popular}
          />
          <HomeFilms
            images={upComingImages}
            isLoading={isLoading}
            title={filmTitles.upComing}
          />
        </>
      )}
    </div>
  );
}

export default AllHomeFilms;
