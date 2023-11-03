import { createSlice } from "@reduxjs/toolkit";

const languagesSlice = createSlice({
  name: "languages",
  initialState: {
    allLanguages: [],
    flag: null,
    addedMovies: localStorage.getItem("movie")
      ? JSON.parse(localStorage.getItem("movie"))
      : [],
    filteredMovie: [],
  },
  reducers: {
    getLanguages: (state, action) => {
      state.allLanguages = action.payload;
    },
    addCard: (state, action) => {
      state.flag = true;
    },
    removeCard: (state, action) => {
      state.flag = false;
    },
  },
});
export const { getLanguages, addCard, removeCard } = languagesSlice.actions;
export default languagesSlice.reducer;
