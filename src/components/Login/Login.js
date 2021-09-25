import React, { Component } from "react";
import "./Login.css";

export class Login extends Component {

  backLastPage(){
    window.history.back();
  }
  render() {
    return (
      <div>
        <button className="back-button" onClick={this.backLastPage}>Back</button>
        <h1>Login Page</h1>
        <input type="email" className="email-style" placeholder="Your email" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Login"/>
      </div>
    );
  }
}

export default Login;
