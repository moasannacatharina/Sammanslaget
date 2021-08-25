import React, { useState } from "react";
// import HTMLFlipBook from "react-pageflip";
// import Page from "../../components/Page/index.js";
// import FrontPage from "../../components/FrontPage/index.js";
import Book from "../../components/Book";
import ClosedBook from "../../components/ClosedBook";
import "./home.css";
// import sound from "../../assets/sound/Simple-Book-Page-Turn-www.fesliyanstudios.com-www.fesliyanstudios.com.mp3";

const Home = () => {
  const [visible, setVisible] = useState("");
  const [invisible, setInvisible] = useState("");

  console.log(visible);
  return (
    <div>
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
