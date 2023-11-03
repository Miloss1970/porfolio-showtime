import { createSlice } from "@reduxjs/toolkit";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    allGenres: [],
    count: [],
    genreMenuClass: false,
  },
  reducers: {
    getGenres: (state, action) => {
      state.allGenres = action.payload;
      state.count = action.payload.length;
    },
    setGenreMenuClass: (state, action) => {
      state.genreMenuClass = false;
    },
    setGenreMenuRespClass: (state, action) => {
      state.genreMenuClass = true;
    },
  },
});
export const { getGenres, setGenreMenuRespClass, setGenreMenuClass } =
  genresSlice.actions;
export default genresSlice.reducer;
