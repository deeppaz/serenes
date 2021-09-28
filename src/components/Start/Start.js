import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Start.css";

export class Start extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to the Serenes</h1>
        <Link to="/signin" style={{ textDecoration: 'none' }}>
          <button>Sign In</button>
        </Link>
        <Link to="/signup" style={{ textDecoration: 'none' }}>
          <button>Sign Up</button>
        </Link>
        <Link to="/anonymous" style={{ textDecoration: 'none' }}>
          <button>Anonymous</button>
        </Link>
        <p style={{ textDecoration: "none", color: "rgb(0 254 190 / 75%)", textShadow:"rgb(49 58 60 / 51%) 1px 1px 1px" }}>If you want to Listen immediately click to Anonymous button</p>
      </div>
    );
  }
}

export default Start;
