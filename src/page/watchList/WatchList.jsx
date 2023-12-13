import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WatchList(props) {
  const { addedMovies } = useSelector((state) => state.watchListStore);
  const [movies, setMovies] = useState(addedMovies);
  useEffect(() => {
    setMovies(addedMovies);
  }, [addedMovies]);

  return (
    <div>
      <NavBar />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] p-[100px]">
        {movies?.map((filmCard, i) => {
          return <Card key={i} filmCard={filmCard} />;
        })}
      </div>
    </div>
  );
}

export default WatchList;
