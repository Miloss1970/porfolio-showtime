import { configureStore } from "@reduxjs/toolkit";
import bannerSlice from "./FilterSlice.js";
import filerStore from "./filerStore";
import filterSlice from "./FilterSlice.js";
import genresSlice from "./genresStrore/genresSlice";
import countriesSlice from "./genresStrore/Countries.Slice";
import languagesSlice from "./genresStrore/LanguagesSlice";
import watchListMovieSlice from "./watchListMovieStore/WatchListMovieSlice";

const store = configureStore({
  reducer: {
    filterStore: filterSlice,
    genresStore: genresSlice,
    countriesStore: countriesSlice,
    languagesStore: languagesSlice,
    watchListStore: watchListMovieSlice,
  },
});

export default store;
