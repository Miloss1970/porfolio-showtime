import React from "react";
import loadingImg from "../../assets/tapeRed.png";
import "../../App.css";

function Loading(props) {
  return (
    <div className="absolute top-[40%] right-[50%] text-primary">
      <h1 className="mb-[30px] text-[30px] font-bold">Loading...</h1>
      <img className="animation w-[100px] " src={loadingImg} alt="" />
    </div>
  );
}

export default Loading;
