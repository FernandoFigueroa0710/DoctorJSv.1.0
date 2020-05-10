import React, { Component } from "react";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="../components/bloodpressure/BloodPressure.js"
                >
                  Blood Pressure
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="../components/bloodglucose/BloodGlucose.js"
                >
                  Blood Glucose
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="../components/carbsintake/CarbsIntake.js"
                >
                  Carbs Info
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="../components/logout/Logout.js">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default LandingPage;
