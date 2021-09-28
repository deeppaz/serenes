import React, { useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import Notification, {notify} from "react-notify-toast";

import "./Mods.css";
//images
import Chill from "../../assets/image/icons/chill.svg";
import Hype from "../../assets/image/icons/energy.svg";
import Random from "../../assets/image/icons/random.svg";

const Mods = ({ history }) => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
        history.push("/signin");
      })
      .catch((e) => notify.show(e.message));
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      history.push("/signin");
    }
  }, []);

  const auth = getAuth();
  const user = auth.currentUser;

  return (
    <div>
      <Notification />
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
              Welcome
            </small>
            <h1>{user && user.displayName}</h1>
            <button className="logout-button" onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </div>
      <h1>Select your Mod</h1>
      <Link style={{ textDecoration: "none" }} to="/play">
        <button>
          Chill <img width="50px" height="50px" src={Chill} alt="Chill" />
        </button>
      </Link>

      <button>
        Hype <img width="50px" height="50px" src={Hype} alt="Hype" />
      </button>
      <button>
        Random <img width="50px" height="50px" src={Random} alt="Random" />
      </button>
    </div>
  );
};

export default Mods;
