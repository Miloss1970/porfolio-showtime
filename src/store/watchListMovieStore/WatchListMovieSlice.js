import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: {
    addedMovies: localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie"))
      : [],
  },
  reducers: {
    addMovie: (state, action) => {
      if (localStorage.getItem("movie")) {
        state.addedMovies = JSON.parse(localStorage.getItem("movie"));
      }
      state.addedMovies.push(action.payload);

      localStorage.setItem("movie", JSON.stringify(state.addedMovies));
    },
    deletedCard: (state, action) => {
      const index = state.addedMovies.findIndex(
        (movie) => movie.id === action.payload.id,
      );
      state.addedMovies.splice(index, 1);
      localStorage.setItem("movie", JSON.stringify(state.addedMovies));
    },
  },
});
export const { addMovie, deletedCard } = watchListSlice.actions;
export default watchListSlice.reducer;
