import axios from "axios";

let key = "47490c1cbef77e365ff7eaa5f792328a";

class DetailMovieService {
  static getDetailMovie = (id) => axios.get(`/movie/${id}?api_key=${key}`);
  static getMovieVideos = (id) =>
    axios.get(`/movie/${id}/videos?api_key=${key}`);

  static getMovieRecommended = (id) =>
    axios.get(`/movie/${id}/recommendations?api_key=${key}`);

  static getMovieImages = (id) =>
    axios.get(`/movie/${id}/images?api_key=${key}`);

  static getMovieCast = (id) =>
    axios.get(`/movie/${id}/credits?api_key=${key}`);

  static getMovieReview = (id) =>
    axios.get(`/movie/${id}/reviews?api_key=${key}`);

  static getMovieReviews = (id) =>
    axios.get(`/movie/${id}/reviews?api_key=${key}`);
}

export default DetailMovieService;
