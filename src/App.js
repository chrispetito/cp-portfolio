import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <div className="App">
    <NavBar />
    <div className='page-content'>
    <AboutMe />
    </div>
    </div>
  );
}

export default App;
