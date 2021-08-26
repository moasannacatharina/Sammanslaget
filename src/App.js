import React, { useState } from "react";
import "./App.css";
import { Router } from "@reach/router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import OpenBook from "./pages/OpenBook";
import music from "./assets/sound/my-life-main.mp3";
import Note from "./components/Note";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <div className="App">
      <Navigation />
      <Router>
        <Home path="/" />
        <About path="/about" />
        <OpenBook path="/book" />
      </Router>

      <div className="player">
        <Note
          isPlaying={isPlaying}
          handleOnClick={() => setIsPlaying(!isPlaying)}
        />
        <audio src={music} muted={!isPlaying} autoPlay={true} />
      </div>
    </div>
  );
};

export default App;
