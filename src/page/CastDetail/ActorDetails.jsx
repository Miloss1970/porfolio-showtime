import React, { useEffect, useState } from "react";
import NavBar from "../../components/NavBar/NavBar.jsx";
import { useParams } from "react-router-dom";
import ActorService from "../../service/ActorService/ActorService.js";
import "../../App.css";
import moment from "moment";
import ActorImage from "../../components/ActorComponents/ActorImages/ActorImage";
import ActorAppears from "../../components/ActorComponents/ActorAppears/ActorAppears";
import profileImg from "../../assets/profile.jpg";

function ActorDetails(props) {
  const [actorDetails, setActorDetails] = useState({});
  const [actorImages, setActorImages] = useState([]);
  const [flag, setFlag] = useState(false);
  const { id } = useParams();
  useEffect(() => {
    ActorService.getActorDetails(id)
      .then((res) => setActorDetails(res.data))
      .catch((err) => console.log(err));
    // file_path
    ActorService.getActionImages(id)
      .then((res) => setActorImages(res.data.profiles))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="relative">
      <NavBar />
      {flag ? (
        <div
          className=" absolute w-[100vw] top-0 text-gray-500 bg-black bg-opacity-10 backdrop-filter backdrop-blur-[15px]  h-[100vh] bg-black z-[6] "
          onClick={() => setFlag(false)}
        ></div>
      ) : null}

      {flag ? <ActorImage id={id} /> : null}
      <div className="px-[50px] md:px-[100px] pt-[100px]">
        <div className="text-gray-200 flex flex-col md:flex-row gap-[50px] ">
          <div
            className="relative w-[200px] h-[300px]"
            onClick={() => setFlag(true)}
          >
            {actorDetails?.profile_path ? (
              <img
                className="w-[200px]  h-[300px]"
                src={`https://image.tmdb.org/t/p/original${actorDetails?.profile_path}`}
                alt=""
              />
            ) : (
              <img className="w-[200px]  h-[300px]" src={profileImg} alt="" />
            )}
            {actorDetails?.profile_path ? (
              <div className="bg-overlay hover:h-[100%] text-black text-shadow-md font-bold text-[20px] transition-all duration-500">
                Show Gallery
              </div>
            ) : null}
          </div>
          <div className="flex flex-col gap-2 justify-center">
            <p className="text-gray-200 font-bold text-[25px]">
              Name: <span className="text-primary">{actorDetails?.name}</span>
            </p>
            <p className="text-gray-200 font-bold text-[25px]">
              Department:{" "}
              <span className="text-gray-500">
                {actorDetails.known_for_department}
              </span>
            </p>
            <p className="text-gray-200 font-bold text-[25px]">
              Date of birth:{" "}
              <span className="text-gray-500">
                {moment(actorDetails.birthday).format("MMM DD, YYYY")}
              </span>
            </p>
            <p className="text-gray-200 font-bold text-[25px]">
              Place of birth:{" "}
              <span className="text-gray-500">
                {actorDetails.place_of_birth}
              </span>
            </p>
            <p className="text-gray-200 font-bold text-[25px]">
              Popularity:{" "}
              <span className="text-gray-500">{actorDetails.popularity}</span>
            </p>
            {/*format('MMM DD, YYYY')*/}
          </div>
        </div>
        {actorDetails.biography !== "" ? (
          <div className=" mt-[50px]">
            <h1 className="text-gray-200 font-bold text-[25px]">Biography:</h1>
            <p className="text-gray-500 font-bold">{actorDetails.biography}</p>
          </div>
        ) : null}

        <ActorAppears id={id} />
      </div>
    </div>
  );
}

export default ActorDetails;
