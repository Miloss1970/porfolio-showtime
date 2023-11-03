import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    genres: [],
    years: [],
    languages: [],
    countries: [],
    flag: false,
  },
  reducers: {
    toggleYears: (state, action) => {
      const year = action.payload;
      if (state.years.includes(year)) {
        state.years = state.years.filter((el) => el !== year);
      } else {
        state.years.push(year);
      }
    },
    toggleGenres: (state, action) => {
      const genre = action.payload;
      if (state.genres.includes(genre)) {
        state.genres = state.genres.filter((el) => el !== genre);
      } else {
        state.genres.push(genre);
      }
    },
    toggleLanguages: (state, action) => {
      const language = action.payload;
      if (state.languages.includes(language)) {
        state.languages = state.languages.filter((el) => el !== language);
      } else {
        state.languages.push(language);
      }
    },
    toggleCountries: (state, action) => {
      const country = action.payload;
      if (state.countries.includes(country)) {
        state.countries = state.countries.filter((el) => el !== country);
      } else {
        state.countries.push(country);
      }
    },
    changeFlag: (state, action) => {
      state.flag = !state.flag;
    },
  },
});
export const {
  toggleYears,
  toggleGenres,
  toggleLanguages,
  toggleCountries,
  changeFlag,
} = filterSlice.actions;
export default filterSlice.reducer;
