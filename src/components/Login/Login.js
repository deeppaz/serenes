import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import Notifications, { notify } from "react-notify-toast";

import HomePage from "../../assets/image/icons/home.svg";
import "./Login.css";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/mods");
    }
  }, []);

  const onLogin = () => {
    setLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        history.push("/mods");
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/invalid-email":
            notify.show("not an e-mail address or you left the e-mail blank");
            break;
          case "auth/internal-error":
            notify.show("unexpected error or you didn't type the password")
            break;  
          case "auth/user-not-found":
            notify.show("no way, there is no such user")
            break;  
        }
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <Notifications />
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
        onClick={onLogin}
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
