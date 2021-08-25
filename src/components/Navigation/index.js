import React from "react";
import { Link } from "@reach/router";
import "./index.css";
import music from "../../assets/sound/my-life-main.mp3";
import Note from "../Note";

const Navigation = () => {
  const [isPlaying, setIsPlaying] = React.useState(true);
  return (
    <nav>
      <Link className="link" to="/">
        Home
      </Link>
      <Link className="link" to="/about">
        About
      </Link>
      <div>
        <Note
          isPlaying={isPlaying}
          handleOnClick={() => setIsPlaying(!isPlaying)}
        />
        <audio src={music} muted={!isPlaying} autoPlay={true} />
      </div>
    </nav>
  );
};

export default Navigation;
