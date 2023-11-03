import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import Card from "../../components/Card/Card";

function WatchList(props) {
  const { addedMovies } = useSelector((state) => state.languagesStore);

  let aaa = JSON.parse(localStorage.getItem("movie"));

  return (
    <div>
      <NavBar />
      {addedMovies.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[50px] p-[100px]">
          {aaa?.map((filmCard, i) => {
            return <Card key={i} filmCard={filmCard} />;
          })}
        </div>
      ) : (
        <div className="text-primary text-[30px] p-[100px] font-bold">
          WatchList is empty.
        </div>
      )}
    </div>
  );
}

export default WatchList;
