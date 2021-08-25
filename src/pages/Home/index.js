import React, { useState } from "react";
import Book from "../../components/Book";
import ClosedBook from "../../components/ClosedBook";
import Note from "../../components/Note/index.js";

import "./home.css";
//import sound from "../../assets/sound/Simple-Book-Page-Turn.mp3";
import music from "../../assets/sound/my-life-main.mp3";

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
    </div>
  );
};

export default Home;
