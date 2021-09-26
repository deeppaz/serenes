import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onRegister = () => {
    console.log(name, email, password);
  };

  return (
    <div>
      <button className="back-button">Back</button>
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
        style={{ fontFamily: "verdana" }}
      />
      <input type="submit" value="Register" onClick={onRegister} />
    </div>
  );
};

export default Register;
