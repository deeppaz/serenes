import React, { Component } from "react";

export class Register extends Component {
  backLastPage() {
    window.history.back();
  }
  render() {
    return (
      <div>
        <button className="back-button" onClick={this.backLastPage}>
          Back
        </button>
        <h1>Register Page</h1>
        <input type="email" className="email-style" placeholder="Your email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Password" />
        <input type="submit" value="Register" />
      </div>
    );
  }
}

export default Register;
