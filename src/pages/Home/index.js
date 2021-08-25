
import React, { useState } from "react";
import Book from "../../components/Book";
import ClosedBook from "../../components/ClosedBook";
import HTMLFlipBook from "react-pageflip";
import Page from "../../components/page/index.js";
import FrontPage from "../../components/FrontPage/index.js";
import Note from "../../components/Note/index.js";

import "./home.css";
//import sound from "../../assets/sound/Simple-Book-Page-Turn.mp3";
import music from "../../assets/sound/my-life-main.mp3";
import gif1 from "../../assets/images/Gif01.gif";

const Home = () => {
  const [visible, setVisible] = useState("");
  const [invisible, setInvisible] = useState("");
  
  const [isPlaying, setIsPlaying] = React.useState(true);

  console.log(visible);
  return (
    <div className="content" style={{ position: "relative" }}>
      <ClosedBook
        handleClick={() => {
          setVisible("true");
          setInvisible("false");
        }}
        visible={visible}
      />
      <div className={`book ${invisible}`}>
        <Book />
      </div>
      <div className="player">
        <Note
          isPlaying={isPlaying}
          handleOnClick={() => setIsPlaying(!isPlaying)}
        />
        <audio src={music} muted={!isPlaying} autoPlay={true} />
      </div>
};

export default Home;
