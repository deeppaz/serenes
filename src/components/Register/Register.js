import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";
import Notification, { notify } from "react-notify-toast";

import HomePage from "../../assets/image/icons/home.svg";

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      history.push("/mods");
    }
  }, []);

  const onRegister = () => {
    setLoading(true);
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        updateProfile(auth.currentUser, { displayName: name })
          .then(
            () => history.push("/signin"),
            notify.show("you registered, now login", "success")
          )
          .catch((e) => {
            switch (e.code) {
              case "auth/invalid-email":
                notify.show(
                  "not an e-mail address or you left the e-mail blank",
                  "error",
                  3000
                );
                break;
              case "auth/email-already-in-use":
                notify.show(
                  "this email already exists try another",
                  "error",
                  3000
                );
                break;
              case "auth/internal-error":
                notify.show(
                  "unexpected error or you didn't type the password",
                  "error",
                  3000
                );
                break;
              case "auth/user-not-found":
                notify.show("no way, there is no such user", "error", 3000);
                break;
              case "auth/weak-password":
                notify.show(
                  "password should be at least 6 characters",
                  "error",
                  3000
                );
                break;
            }
          });
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/invalid-email":
            notify.show(
              "not an e-mail address or you left the e-mail blank",
              "error",
              3000
            );
            break;
          case "auth/email-already-in-use":
            notify.show("this email already exists try another", "error", 3000);
            break;
          case "auth/internal-error":
            notify.show(
              "unexpected error or you didn't type the password",
              "error",
              3000
            );
            break;
          case "auth/user-not-found":
            notify.show("no way, there is no such user", "error", 3000);
            break;
          case "auth/weak-password":
            notify.show(
              "password should be at least 6 characters",
              "error",
              3000
            );
            break;
        }
      })
      .finally(() => setLoading(false));
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
