import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  signInWithEmailAndPassword
} from "../../services/config/firebaseconfig";
import { useAuthState } from "react-firebase-hooks/auth";
import Notifications, { notify } from "react-notify-toast";

import HomePage from "../../assets/image/icons/home.svg";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      //loading trigger
      return;
    }
    if (user) history.replace("/mods");
  }, [user, loading]);

  return (
    <div>
      <Notifications options={{ zIndex: 200, top: "50px" }} />
      <h1>Login Page</h1>
      <Link to="/">
        {" "}
        <button className="back-button">
          {" "}
          <img src={HomePage} alt="home" width="50px" height="50px" />
        </button>
      </Link>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email-style"
        placeholder="Your email"
      />
      <input
        type="password"
        value={password}
        className="password-input"
        style={{ fontFamily: "verdana", fontSize: "38px" }}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="submit"
        value={loading ? "youre logging on..." : "Login"}
        onClick={() => signInWithEmailAndPassword(email, password)}
      />
      <div style={{ display: "block" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(0 254 190 / 75%)",
            textShadow: "rgb(49 58 60 / 51%) 1px 1px 1px",
          }}
          to="/signup"
        >
          <p className="already-has-account-p">
            don't you really have an account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
