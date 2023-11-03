import axios from "axios";

let key = "47490c1cbef77e365ff7eaa5f792328a";

class SearchService {
  static getSearchMovie = (title, page) =>
    axios.get(`/search/movie?api_key=${key}&query=${title}&page=${page}`);

  static getFilterMovie = (genres, years, language, country, page) =>
    axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${key}&include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc&with_genres=${genres}&primary_release_year=${years}&with_original_language=${language}&with_origin_country=${country}`,
    );

  static getAllLanguages = () =>
    axios.get(
      `https://api.themoviedb.org/3/configuration/languages?api_key=${key}`,
    );
  static getAllCountries = () =>
    axios.get(
      `https://api.themoviedb.org/3/configuration/countries?api_key=${key}`,
    );

  static getWatchArray = (filmCards, Movie) => {
    let isOnWatchList = filmCards?.results?.filter(({ id: id1 }) => {
      return Movie?.some(({ id: id2 }) => id1 === id2);
    });

    let notOnWatchList = filmCards?.results?.filter(({ id: id1 }) => {
      return !Movie?.some(({ id: id2 }) => id1 === id2);
    });

    isOnWatchList?.forEach((n) => (n.watchList = true));
    notOnWatchList?.forEach((n) => (n.watchList = false));

    let watchListArray = isOnWatchList?.concat(notOnWatchList);
    return watchListArray;
  };
}

export default SearchService;
