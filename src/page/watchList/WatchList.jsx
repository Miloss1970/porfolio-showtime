import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Card from "../../components/Card/Card";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function WatchList(props) {
  const { addedMovies } = useSelector((state) => state.watchListStore);
  const [movies, setMovies] = useState(addedMovies);
  console.log(addedMovies);
  useEffect(() => {
    setMovies(addedMovies);
  }, [addedMovies]);

  return (
    <div>
      <NavBar />

      {addedMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] p-[100px]">
          {movies?.map((filmCard, i) => {
            return <Card key={i} filmCard={filmCard} />;
          })}
        </div>
      ) : (
        <div className="p-[100px] text-primary text-4xl">
          WatchList is empty.
        </div>
      )}
    </div>
  );
}

export default WatchList;
