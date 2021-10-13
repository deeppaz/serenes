import React, { useEffect, useState } from "react";
import AudioPlayer from "react-cl-audio-player";
import HypePlaylist from "../../services/data/HypePlaylist";
import data from "../../services/data/BGif.json";
import "../../assets/css/public-css.css";
import HomePage from "../../assets/image/icons/home.svg";
import { Link } from "react-router-dom";

const Hype = () => {
  const [hypegifs, setHypegifs] = useState(0);

  useEffect(() => {
    const getArrayNumber = Math.floor(Math.random() * data.length);
    const interval = setInterval(() => {
      setHypegifs(getArrayNumber);
    }, 11000);
    return () => clearInterval(interval);
  }, [hypegifs]);

  return (
    <div className="playlist-body">
      <Link to="/">
        {" "}
        <button className="back-button">
          {" "}
          <img src={HomePage} alt="home" width="50px" height="50px" />
        </button>
      </Link>
      <img
        src={data[hypegifs].gifs}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",

          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: -100,
        }}
        alt="bgifs"
      />
      <AudioPlayer songs={HypePlaylist} autoplay />
    </div>
  );
};

export default Hype;
