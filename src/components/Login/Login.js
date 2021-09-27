import React, { useEffect, useState } from "react";
import "./Login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";

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
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("token", userCredential._tokenResponse.idToken);
        history.push("/mods");
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <h1>Login Page</h1>
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
        style={{fontFamily: "verdana", fontSize:'38px'}}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="submit"
        value={loading ? "youre logging on..." : "Login"}
        onClick={onLogin}
      />
      <div style={{ display: "block" }}>
        <Link style={{ textDecoration: "none", color: "orange" }} to="/signup">
          <p className="already-has-account-p">
            don't you really have an account?
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Login;
