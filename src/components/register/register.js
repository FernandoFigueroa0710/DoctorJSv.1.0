import React, { Component } from "react";
import "./Register.css";

class Register extends Component {
  render() {
    return (
      <div className="text-center">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
          <label htmlFor="inputEmail" className="sr-only">
            Name
          </label>
          <input
            type="name"
            id="inputName"
            className="form-control"
            placeholder="Name"
            required
            autoFocus
          />
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required
            autoFocus
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />
          <label htmlFor="inputPassword" className="sr-only">
            Confirm Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Confirm Password"
            required
          />
          <div className="checkbox mb-3">
            {/* <label>
              <input type="checkbox" value="remember-me">
                Remember me
              </input>
            </label> */}
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <p className="mt-5 mb-3 text-muted">&copy; 2017-2019</p>
        </form>
      </div>
    );
  }
}

export default Register;
