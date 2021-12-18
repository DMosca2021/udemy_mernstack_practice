import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
      {/* <Game /> */}
      <>
        <div>
          <Routes>
            <Route exact path="/" element={<Nav />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/game" element={<Game />}></Route>
            {/* <Route path="/dashboard">
            <Dashboard />
          </Route> */}
          </Routes>
        </div>
      </>
    </div>
  );
}

export default App;
