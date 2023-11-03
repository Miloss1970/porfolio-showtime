import axios from "axios";

let key = "47490c1cbef77e365ff7eaa5f792328a";

class Genres {
  static getAllGenres = () => axios.get(`genre/movie/list?api_key=${key}`);
  static getSingleGenre = (id, page) =>
    axios.get(
      `discover/movie?api_key=08cc33bd5ae3a747598ce2ad84376e66&with_genres=${id}&page=${page}`,
    );
}

// return this.http
//   .get
//   // `https://api.themoviedb.org/3/`,
//   ();
export default Genres;
