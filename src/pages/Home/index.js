import React, { useState } from "react";
import Book from "../../components/Book";
import ClosedBook from "../../components/ClosedBook";
//import Note from "../../components/Note/index.js";

import "./home.css";
//import sound from "../../assets/sound/Simple-Book-Page-Turn.mp3";

const Home = () => {
  const [visible, setVisible] = useState("");
  const [invisible, setInvisible] = useState("");

  return (
    <div className="content">
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
    </div>
  );
};

export default Home;
