import React, { useEffect, useState } from "react";
import './Login.css'
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";

const Login = ( {history} ) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      history.push('/mods')
    }
  },[])

  const onLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem('token', userCredential._tokenResponse.idToken);
        history.push("/mods");
      })
      .catch((e) => alert(e.message))
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <button className="back-button">
        Back
      </button>
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
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <input
        type="submit"
        value={loading ? "youre logging on..." : "Login"}
        onClick={onLogin}
      />
    </div>
  );
};

export default Login;
