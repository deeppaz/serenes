import React, { useEffect, useState } from "react";
import AudioPlayer from "react-cl-audio-player";
import HypePlaylist from "../../services/data/HypePlaylist";
import data from "../../services/data/BGif.json";

const Hype = () => {
  const rand = function () {
    return Math.floor(Math.random() * data.length);
  };

  return (
    <div>
      <img
        src={data[rand()].gifs}
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
