import React, { Fragment, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, logout } from "../../services/config/firebaseconfig";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import Notification, { notify } from "react-notify-toast";

import "./Mods.css";
//images
import Chill from "../../assets/image/icons/chill.svg";
import Hype from "../../assets/image/icons/energy.svg";
import Random from "../../assets/image/icons/random.svg";

const Mods = () => {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const [mods, setMods] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const history = useHistory();

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
      alert("An error occured while fetching user data");
    }
    setIsLoading(false);
  };

  const selectCurrentMod = async () => {
    db.collection("mods")
      .get()
      .then(function (querySnapshot) {
        const data = querySnapshot.docs[0].data();
        setMods(data.currentMod);
      })
      .catch((err) => {
        console.log("Error getting documents", err);
      });
  };

  const changeCurrentMod = async () => {
    db.collection("mods")
      .doc("gTmrEhJyU0CTB7WrEh3i")
      .update({ currentMod: "Chill" })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const changeCurrentMod2 = async () => {
    db.collection("mods")
      .doc("gTmrEhJyU0CTB7WrEh3i")
      .update({ currentMod: "Hype" })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const changeCurrentMod3 = async () => {
    db.collection("mods")
      .doc("gTmrEhJyU0CTB7WrEh3i")
      .update({ currentMod: "Random" })
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return history.replace("/");
    if (error) return "Hata var";

    fetchUserName();
    selectCurrentMod();
  }, [user, loading]);

  return (
    <Fragment>
      {isLoading ? (
        <h1>yükleniyor</h1>
      ) : (
        <div>
          <Notification options={{ zIndex: 200, top: "50px" }} />
          <div className="card">
            <div className="firstinfo">
              <div
                style={{
                  position: "absolute",
                  top: "140px",
                  bottom: "140px",
                  fontFamily: "Hardpixel",
                }}
              >
                {" "}
                Your current mod: {mods}{" "}
              </div>
              <img src="https://serenes.vercel.app/logo.png" />
              <div className="profileinfo">
                <small
                  style={{
                    fontWeight: "bolder",
                    fontSize: "larger",
                    display: "block",
                    textAlign: "center",
                    paddingTop: "5px",
                  }}
                >
                  Welcome
                </small>
                <h1>{name}</h1>
                <button className="logout-button" onClick={logout}>
                  Logout
                </button>
              </div>
            </div>
          </div>
          <h1>Select your Mod</h1>

          <Link style={{ textDecoration: "none" }} to="/chill">
            <button
              className={mods == "Chill" ? "selected-mod" : "non-selected-mod"}
              value="Chill"
              onClick={() => changeCurrentMod(mods)}
            >
              Chill <img width="50px" height="50px" src={Chill} alt="Chill" />
            </button>
          </Link>

          <Link style={{ textDecoration: "none" }} to="/hype">
            <button
              className={mods == "Hype" ? "selected-mod" : "non-selected-mod"}
              value="Hype"
              onClick={() => changeCurrentMod2(mods)}
            >
              Hype <img width="50px" height="50px" src={Hype} alt="Hype" />
            </button>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/random">
            <button
              className={mods == "Random" ? "selected-mod" : "non-selected-mod"}
              value="Random"
              onClick={() => changeCurrentMod3(mods)}
            >
              Random{" "}
              <img width="50px" height="50px" src={Random} alt="Random" />
            </button>
          </Link>
        </div>
      )}
    </Fragment>
  );
};

export default Mods;
