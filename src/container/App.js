import React, { Component } from "react";
import "./App.css";

// import Login from "../components/login/Login";
// import Register from "../components/register/Register";
import LandingPage from "../components/landingPage/LandingPage";
import { setConstantValue } from "typescript";

const initialState = {
  name: "",
  email: "",
  password: "",
  isLogedIn: false
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      initialState
    };
  }

  render() {
    return (
      <div className="App">
        {/* <Login />
          <Register /> */}
        <LandingPage />
      </div>
    );
  }
}

export default App;
