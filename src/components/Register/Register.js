import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link } from "react-router-dom";

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
          .then(() => history.push("/signin"))
          .catch((e) => alert(e.message));
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>Register Page</h1>
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
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        style={{ fontFamily: "verdana", fontSize:'38px' }}
      />
      <input
        type="submit"
        value={loading ? "creating user..." : "Sign Up"}
        onClick={onRegister}
      />
      <div style={{ display: "block" }}>
        <Link style={{ textDecoration: "none", color: "orange" }} to="/signin">
          <p className="already-has-account-p">
            so do you already have account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Register;
