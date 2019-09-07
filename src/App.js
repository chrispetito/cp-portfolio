import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <AboutMe />
        <TechStack />
        <Projects />
      </div>
    </div>
  );
}

export default App;
