import axios from "axios";

let key = "47490c1cbef77e365ff7eaa5f792328a";

class HomePageService {
  static getAllBanner = () => axios.get(`/trending/movie/day?api_key=${key}`);
  static getImage = (id) =>
    axios.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=${key}`);
  static getGenres = () => axios.get(`/genre/movie/list?api_key=${key}`);
  static getTrendingMovie = (page) =>
    axios.get(`/trending/movie/day?api_key=${key}&page=${page}`);
  static getNowPlaying = (page) =>
    axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${page}`,
    );

  static getTopRated = (page) =>
    axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=${page}`,
    );

  static getPopular = (page) =>
    axios.get(`/movie/popular?api_key=${key}&page=${page}`);

  static getUpComing = (page) =>
    axios.get(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=${page}`,
    );
  static getDetailMovie = (id) => axios.get(`/movie/${id}?api_key=${key}`);
}

// return this.http.get(
export default HomePageService;
