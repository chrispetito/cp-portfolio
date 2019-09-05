import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
    <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: 25, marginBottom: 0 }}>
          Chris Petito
        </p>
        <p> Portfolio coming soon.</p>
        <a
          className="App-link"
          href="https://github.com/chrispetito"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i style={{ marginRight: 5}} className="fab fa-github"></i>My GitHub
        </a>
      </header>
    </div>
  );
}

export default App;
