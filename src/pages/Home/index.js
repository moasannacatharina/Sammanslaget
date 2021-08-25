import React, { useCallback } from "react";
import HTMLFlipBook from "react-pageflip";
import Page from "../../components/page/index.js";
import FrontPage from "../../components/FrontPage/index.js";
import Note from "../../components/Note/index.js";
import "./home.css";
//import sound from "../../assets/sound/Simple-Book-Page-Turn.mp3";
import music from "../../assets/sound/my-life-main.mp3";
import gif1 from "../../assets/images/Gif01.gif";

const Home = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  const onFlip = useCallback((e) => {
    console.log("Current page: " + e.data);
  }, []);

  return (
    <div className="content">
      <div className="book">
        <HTMLFlipBook
          width={500}
          height={700}
          minWidth={315}
          maxWidth={500}
          minHeight={400}
          maxHeight={700}
          maxShadowOpacity={0.5}
          showCover={false}
          onFlip={onFlip}
        >
          {/* <FrontPage>Mika</FrontPage> */}
          <Page
            number="1"
            header="Start"
            children="Det här är berättelsen om ett ungt regnmoln, ett moln med framtidsutsikter och hopp om livet."
            image={gif1}
          ></Page>
          <Page number="2" header="Akt 1" even="even"></Page>
          <Page number="3" header="Akt 1"></Page>
          <Page number="4" header="Akt 2" even="even"></Page>
          <Page number="5" header="Akt 2"></Page>
          <Page number="6" header="Akt 3" even="even"></Page>
          <Page number="7" header="Akt 3"></Page>
          <Page number="8" header="The End" even="even"></Page>
          <FrontPage></FrontPage>
        </HTMLFlipBook>
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
