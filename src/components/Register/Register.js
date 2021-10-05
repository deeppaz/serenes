import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useHistory } from "react-router-dom";
import {
  auth,
  registerWithEmailAndPassword,
} from "../../services/config/firebaseconfig";
import Notification, { notify } from "react-notify-toast";

import HomePage from "../../assets/image/icons/home.svg";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) return;
    if (user) history.replace("/mods");
  }, [user, loading]);

  const onRegister = () => {
    if (!name) notify.show("Please enter name");
    registerWithEmailAndPassword(name, email, password);
  };

  return (
    <div>
      <Notification options={{ zIndex: 200, top: "50px" }} />
      <h1>Register Page</h1>
      <Link to="/">
        {" "}
        <button className="back-button">
          {" "}
          <img src={HomePage} alt="home" width="50px" height="50px" />
        </button>
      </Link>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="email-style"
        placeholder="Your Name"
      />
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
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="submit"
        value={loading ? "creating user..." : "Sign Up"}
        onClick={onRegister}
      />
      <div style={{ display: "block" }}>
        <Link
          style={{
            textDecoration: "none",
            color: "rgb(0 254 190 / 75%)",
            textShadow: "rgb(49 58 60 / 51%) 1px 1px 1px",
          }}
          to="/signin"
        >
          <p className="already-has-account-p">
            so do you already have account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
