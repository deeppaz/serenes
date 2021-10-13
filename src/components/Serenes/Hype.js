import React, { useEffect, useState } from "react";
import AudioPlayer from "react-cl-audio-player";
import HypePlaylist from "../../services/data/HypePlaylist";
import data from "../../services/data/BGif.json";
import "../../assets/css/public-css.css";
import HomePage from "../../assets/image/icons/home.svg";
import { Link } from "react-router-dom";

const Hype = () => {
  const color = [
    { colors: "saat renkler" },
    { colors: "saat renkler2" },
    { colors: "saat renkler3" },
    { colors: "saat renkler4" },
    { colors: "saat renkler5" },
    { colors: "saat renkler6" },
    { colors: "saat renkler7" },
    { colors: "saat renkler8" },
  ];
  const [hypegifs, setHypegifs] = useState(0);
  const [date, setDate] = useState(new Date());
  const [randomCustomColor, setRandomCustomColor] = useState(0);

  useEffect(() => {
    const getArrayNumber = Math.floor(Math.random() * data.length);
    const getColorNumber = Math.floor(Math.random() * color.length);
    setInterval(() => {
      setHypegifs(getArrayNumber);
      setRandomCustomColor(color[getColorNumber].colors);
    }, 11000);
    setInterval(() => tick(), 1000);
  }, [hypegifs]);

  function tick() {
    setDate(new Date());
  }

  return (
    <div className="playlist-body">
      <Link to="/">
        {" "}
        <button className="back-button">
          {" "}
          <img src={HomePage} alt="home" width="50px" height="50px" />
        </button>
      </Link>
      <h1 className={randomCustomColor}>{date.toLocaleTimeString()}</h1>
      {/* <h1 className={anecdotes[randomCustomColor]}>15:41:33</h1> */}
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
