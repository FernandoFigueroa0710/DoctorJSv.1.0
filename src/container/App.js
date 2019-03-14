import React, { Component } from "react";
import "./App.css";

// import Login from "../components/login/Login";
// import Register from "../components/register/Register";
import LandingPage from "../components/landingPage/LandingPage";

class App extends Component {
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
