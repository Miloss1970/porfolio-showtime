import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/filerStore.js";
import TrendingFilms from "./page/TrandingFilms/TrandingFilms.jsx";
import axios from "axios";
import TopRatedFilms from "./page/TopRatedFilms/TopRatedFilms.jsx";
import NowPlayingFilms from "./page/NowPlayingFilms/NowPlayingFilms.jsx";
import UpcomigMovies from "./page/UpcomingMovies/UpcomigMovies.jsx";
import PopularFilms from "./page/PopularFilms/PopularFilms.jsx";
import DetailMovie from "./page/DetailMovie/DetailMovie.jsx";
import ActorDetails from "./page/CastDetail/ActorDetails.jsx";
import ActionMovie from "./page/AllMovieGenres/ActionMovie/ActionMovie";
import AdventureMovie from "./page/AllMovieGenres/AdventureMovie/Adventure";
import AnimationMovie from "./page/AllMovieGenres/AnimationMovie/AnimationMovie";
import ComedyMovie from "./page/AllMovieGenres/ComedyMovie/ComedyMovie";
import CrimeMovie from "./page/AllMovieGenres/CrimeMovie/CrimeMovie";
import DocumentaryMovie from "./page/AllMovieGenres/DocumentaryMovie/DocumentaryMovie";
import DramaMovie from "./page/AllMovieGenres/DramaMovie/DramaMovie";
import FamilyMovie from "./page/AllMovieGenres/FamilyMovie/FamilyMovie";
import FantasyMovie from "./page/AllMovieGenres/FantasyMovie/FantasyMovie";
import HistoryMovie from "./page/AllMovieGenres/HistoryMovie/HistoryMovie";
import HorrorMovie from "./page/AllMovieGenres/HorrorMovie/HorrorMovie";
import MusicMovie from "./page/AllMovieGenres/MusicMovie/MusicMovie";
import MysteryMovie from "./page/AllMovieGenres/MysteryMovie/MysteryMovie";
import RomanceMovie from "./page/AllMovieGenres/RomanceMovie/RomanceMovie";
import ScienceMovie from "./page/AllMovieGenres/ScienceMovie/ScienceMovie";
import ThrillerMovie from "./page/AllMovieGenres/ThrillerMovie/ThrillerMovie";
import WarMovie from "./page/AllMovieGenres/WarMovie/WarMovie";
import WesternMovie from "./page/AllMovieGenres/WesternMovie/WesternMovie";
import TVMovie from "./page/AllMovieGenres/TvMovie/TvMovie";
import FilteredMovie from "./page/FilteredMovie/FilteredMovie";
import WatchList from "./page/watchList/WatchList";
import AllMovies from "./page/allMovies/allMovies";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

function TvMovie() {
  return null;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/trendingMovie",
    element: <TrendingFilms />,
  },

  {
    path: "/topMovie",
    element: <TopRatedFilms />,
  },
  {
    path: "/nowMovie",
    element: <NowPlayingFilms />,
  },
  {
    path: "/upcomingMovie",
    element: <UpcomigMovies />,
  },
  {
    path: "/popularMovie",
    element: <PopularFilms />,
  },
  {
    path: "/detailMovie/:id",
    element: <DetailMovie />,
  },

  {
    path: "/actorDetail/:id",
    element: <ActorDetails />,
  },
  {
    path: "/actionMovie/:id",
    element: <ActionMovie />,
  },
  {
    path: "/adventureMovie/:id",
    element: <AdventureMovie />,
  },
  {
    path: "/animationMovie/:id",
    element: <AnimationMovie />,
  },
  {
    path: "/comedyMovie/:id",
    element: <ComedyMovie />,
  },
  {
    path: "/crimeMovie/:id",
    element: <CrimeMovie />,
  },
  {
    path: "/documentaryMovie/:id",
    element: <DocumentaryMovie />,
  },
  {
    path: "/dramaMovie/:id",
    element: <DramaMovie />,
  },
  {
    path: "/familyMovie/:id",
    element: <FamilyMovie />,
  },
  {
    path: "/fantasyMovie/:id",
    element: <FantasyMovie />,
  },
  {
    path: "/historyMovie/:id",
    element: <HistoryMovie />,
  },
  {
    path: "/horrorMovie/:id",
    element: <HorrorMovie />,
  },
  {
    path: "/musicMovie/:id",
    element: <MusicMovie />,
  },
  {
    path: "/mysteryMovie/:id",
    element: <MysteryMovie />,
  },
  {
    path: "/romanceMovie/:id",
    element: <RomanceMovie />,
  },
  {
    path: "/scienceMovie/:id",
    element: <ScienceMovie />,
  },
  {
    path: "/tvMovie/:id",
    element: <TVMovie />,
  },
  {
    path: "/thrillerMovie/:id",
    element: <ThrillerMovie />,
  },
  {
    path: "/warMovie/:id",
    element: <WarMovie />,
  },
  {
    path: "/westernMovie/:id",
    element: <WesternMovie />,
  },
  {
    path: "/filteredMovie",
    element: <FilteredMovie />,
  },

  {
    path: "/watchList",
    element: <WatchList />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
