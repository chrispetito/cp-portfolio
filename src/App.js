import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <AboutMe />
        <TechStack />
      </div>
    </div>
  );
}

export default App;
