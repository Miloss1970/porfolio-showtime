import axios from "axios";

let key = "47490c1cbef77e365ff7eaa5f792328a";

class ActorService {
    static getActorDetails = (id) => axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=${key}`);
    static getActionImages = (id) =>
        axios.get(`https://api.themoviedb.org/3/person/${id}/images?api_key=${key}`);

    static  getActionAppears = (id) => axios.get(`person/${id}/movie_credits?api_key=${key}`)
}

// return this.http.get(`https://api.themoviedb.org/3/`)
export default ActorService;
