import React, { FC } from "react";
import "./App.css";
import Sample from "./components/sample";
import logo from "./assets/redux_logo.png";

function App() {
  return (
    <div className="App">
      <div className="Small-blank" />
      <img
        src={logo}
        className="App-logo"
        alt="logo"
        style={{ width: "250px", height: "250px" }}
      />
      <Sample />
    </div>
  );
}

export default App;
