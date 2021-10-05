import React, { useEffect, useState } from "react";
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
  const history = useHistory();

  const fetchUserName = async () => {
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
    console.log("currentmod: " + mods);
    db.collection("mods")
      .doc("gTmrEhJyU0CTB7WrEh3i")
      .update({ currentMod: mods })
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

    fetchUserName();
    selectCurrentMod();
  }, [user, loading]);

  return (
    <div>
      <Notification options={{ zIndex: 200, top: "50px" }} />
      <div className="card">
        <div className="firstinfo">
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
              Welcome {mods}
            </small>
            <h1>{name}</h1>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <h1>Select your Mod</h1>
      <div>
        <input
          type="text"
          value={mods}
          onChange={(e) => setMods(e.target.value)}
        />
        <input type="submit" onClick={() => changeCurrentMod()} />
      </div>
    </div>
  );
};

export default Mods;
