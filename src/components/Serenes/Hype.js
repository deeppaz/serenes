import React, { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../services/config/firebaseconfig";
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
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [hypegifs, setHypegifs] = useState([0]);
  const [date, setDate] = useState(new Date());
  const [randomCustomColor, setRandomCustomColor] = useState([0]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (loading) return;
    setInterval(() => {
      hypeGifs();
      clockColor();
    }, 11000);
    setInterval(() => tick(), 1000);
    fetchUserName();
  }, [user, loading, data]);

  function hypeGifs() {
    setHypegifs(Math.floor(Math.random() * data.length));
  }

  function clockColor() {
    setRandomCustomColor(Math.floor(Math.random() * color.length));
  }

  function tick() {
    setDate(new Date());
  }

  function refreshPage() {
    window.location.reload(false);
    // you shouldnt use like this but :d its okay for now 
  }

  const fetchUserName = async () => {
    setIsLoading(true);
    try {
      const query = await db
        .collection("users")
        .where("uid", "==", user?.uid)
        .get();
      const data = await query.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
    }
    setIsLoading(false);
  };

  return (
    <Fragment>
      {isLoading ? (
        <p>yükleniyor</p>
      ): (
        <div className="playlist-body">
        <Link to="/">
          {" "}
          <button className="back-button">
            {" "}
            <img src={HomePage} alt="home" width="50px" height="50px" />
          </button>
        </Link>
        <div className="another-card">
          <h1 className="card-name">
            {name ? (
             "your name: " +name
            ) : (
              <Link
                style={{ textDecoration: "none", color: "#f2e25e" }}
                to="/signin"
              >
                please log in
              </Link>
            )}
          </h1>
          <p className="card-status">
            status:{" "}
            <small style={{ fontSize: "15px", color: "#f2e25e" }}>
              {name ? "online" : "anonim"}
            </small>
          </p>
          {name ? (
            <button className="logout-button-alt" onClick={() => { logout(); refreshPage();}}>
              Logout
            </button>
          ) : (
            ""
          )}
        </div>
        <h1 className={color[randomCustomColor].colors}>
          {date.toLocaleTimeString()}
        </h1>
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
      )}
    </Fragment>
  );
};

export default Hype;
