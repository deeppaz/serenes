import React, { useEffect, useState } from "react";
import AudioPlayer from "react-cl-audio-player";
import HypePlaylist from "../../services/data/HypePlaylist";
import data from "../../services/data/BGif.json";
import "../../assets/css/public-css.css";
import HomePage from "../../assets/image/icons/home.svg";
import { Link } from "react-router-dom";

const Random = () => {
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
  const [hypegifs, setHypegifs] = useState([0]);
  const [date, setDate] = useState(new Date());
  const [randomCustomColor, setRandomCustomColor] = useState(0);

  useEffect(() => {
    setInterval(() => {
      hypeGifs();
      clockColor();
    }, 11000);
    setInterval(() => tick(), 1000);
  }, []);

  function hypeGifs() {
    setHypegifs(Math.floor(Math.random() * data.length));
  }
  
  function clockColor() {
    setRandomCustomColor(Math.floor(Math.random() * color.length));
  }

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
      <h1 className={color[randomCustomColor].colors}>{date.toLocaleTimeString()}</h1>
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

export default Random;
