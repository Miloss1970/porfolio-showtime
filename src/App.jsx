import "./App.css";
import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import Carousel from "./components/Banner/Banner.jsx";
import AllHomeFilms from "./components/AllHomeFilms/AllHomeFilms.jsx";

function App() {
  return (
    <div className="container max-w-full">
      <NavBar />
      <Carousel />
      <AllHomeFilms />
    </div>
  );
}

export default App;
