import React, { Component } from "react";
import { Link } from "react-router-dom";
//images
import Chill from "../../assets/image/icons/chill.svg";
import Hype from "../../assets/image/icons/energy.svg";
import Random from "../../assets/image/icons/random.svg";
import HomePage from "../../assets/image/icons/home.svg";

export class Anonymous extends Component {
  render() {
    return (
      <div>
        <Link to="/">
          {" "}
          <button className="back-button">
            <img src={HomePage} alt="home" width="50px" height="50px" />
          </button>
        </Link>
        <h1>Select your Mod</h1>
        <Link style={{ textDecoration: "none" }} to="/chill">
          <button>
            Chill <img width="50px" height="50px" src={Chill} alt="Chill" />
          </button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/hype">
          <button>
            Hype <img width="50px" height="50px" src={Hype} alt="Hype" />
          </button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/random">
          <button>
            Random <img width="50px" height="50px" src={Random} alt="Random" />
          </button>
        </Link>
      </div>
    );
  }
}

export default Anonymous;
