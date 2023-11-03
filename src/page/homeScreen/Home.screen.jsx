import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Banner/Banner";
import AllHomeFilms from "../../components/AllHomeFilms/AllHomeFilms";

function HomeScreen(props) {
  return (
    <div className="container max-w-full">
      <NavBar />
      <Carousel />

      <AllHomeFilms />
    </div>
  );
}

export default HomeScreen;
