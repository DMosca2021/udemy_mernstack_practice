import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Game from "./pages/Game";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Nav />}></Route>
            <Route index element={<Home />}></Route>
            <Route path="/game" element={<Game />}></Route>
            {/* <Route path="/dashboard"><Dashboard /></Route> */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
