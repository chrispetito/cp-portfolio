import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page-content">
        <AboutMe />
        <TechStack />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
