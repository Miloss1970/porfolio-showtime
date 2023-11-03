import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import SearchService from "../../service/SearchService/SearchService";
import { logDOM } from "@testing-library/react";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../loading/Loading";

// iso_3166_1
function FilteredMovie(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovie, setSearchMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { allGenres } = useSelector((state) => state.genresStore);
  const { genres, years, languages, countries, flag } = useSelector(
    (state) => state.filterStore,
  );
  const { allCountries } = useSelector((state) => state.countriesStore);
  const { allLanguages } = useSelector((state) => state.languagesStore);
  const searchGenres = genres.length > 0 ? genres : "";
  const searchYears = years.length > 0 ? years : "";
  const searchLanguage = languages.length > 0 ? languages : "";
  const searchCountries = countries.length > 0 ? countries : "";
  const navigation = useNavigate();

  window.addEventListener("popstate", function (event) {
    if (window.location.href === "http://localhost:3000/filteredMovie?page=1") {
      navigation(-1);
    }
  });
  let genresArray = genres.map((br) => {
    let changedArray = allGenres.find((z) => z.id === br);
    if (changedArray) {
      return changedArray.name;
    } else {
      return "";
    }
  });

  let countryArray = countries.map((country) => {
    let changedArray = allCountries.find((z) => z.iso_3166_1 === country);
    if (changedArray) {
      return changedArray.english_name;
    } else {
      return "";
    }
  });

  let languageArray = languages.map((language) => {
    let changedArray = allLanguages.find((z) => z.iso_639_1 === language);
    if (changedArray) {
      return changedArray.english_name;
    } else {
      return "";
    }
  });

  useEffect(() => {
    let page = searchParams.get("page") ? searchParams.get("page") : 1;

    SearchService.getFilterMovie(
      searchGenres,
      searchYears,
      searchLanguage,
      searchCountries,
      page,
    )
      .then((res) => setSearchMovie(res.data))
      .catch((err) => console.log(err));
    setIsLoading(false);
  }, [genres, years, languages, countries, setSearchParams]);
  return (
    <div>
      <NavBar />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="p-[100px]">
          <div>
            <p className="text-gray-200 text-[25px] font-bold">
              {" "}
              Genres:{" "}
              <span className="text-gray-500 ">
                {genresArray.length > 0
                  ? genresArray.map((genre, i) => {
                      return (
                        <span className="text-primary" key={i}>
                          {genre}
                          <span className="text-gray-200">
                            {i === genres.length - 1 ? "" : ", "}
                          </span>
                        </span>
                      );
                    })
                  : "/"}
              </span>
            </p>
            <p className="text-gray-200 text-[25px] font-bold">
              Year of release:{" "}
              <span className="text-gray-500">
                {years.length > 0
                  ? years.map((year, i) => {
                      return (
                        <span className="text-gray-500" key={i}>
                          {year}
                          <span className="text-gray-200">
                            {i === years.length - 1 ? "" : ", "}
                          </span>
                        </span>
                      );
                    })
                  : "/"}
              </span>
            </p>
            <p className="text-gray-200 text-[25px] font-bold">
              {" "}
              Language:
              <span className="text-gray-500">
                {languageArray.length > 0
                  ? languageArray.map((language, i) => {
                      return (
                        <span className="text-gray-500" key={i}>
                          {language}
                          <span className="text-gray-200">
                            {i === languages.length - 1 ? "" : ", "}
                          </span>
                        </span>
                      );
                    })
                  : "/"}
              </span>
            </p>
            <p className="text-gray-200 text-[25px] font-bold">
              Country production:
              <span className="text-gray-500">
                {countryArray.length > 0
                  ? countryArray.map((country, i) => {
                      return (
                        <span className="text-gray-500" key={i}>
                          {country}
                          <span className="text-gray-200">
                            {i === countries.length - 1 ? "" : ", "}
                          </span>
                        </span>
                      );
                    })
                  : "/"}
              </span>
            </p>
            <p className="text-gray-200 text-[25px] font-bold">
              Sorted by: Popularity descending
            </p>
          </div>
          <div>
            <h1 className="text-gray-200 text-[30px] font-bold mb-[20px]">
              Movies{" "}
              <span className="text-gray-500">
                ({searchMovie.total_results?.toLocaleString("en-US")})
              </span>
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px]">
              {searchMovie.results?.map((filmCard, i) => {
                return <Card key={i} filmCard={filmCard} />;
              })}
            </div>
          </div>

          <Pagination count={searchMovie.total_results} />
        </div>
      )}
    </div>
  );
}

export default FilteredMovie;
