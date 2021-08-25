import React from "react";
import image from "../../assets/images/music_icon.png";
import "./index.css";

const Note = (props) => (
  <div
    onClick={props.handleOnClick}
    className={`logo ${props.isPlaying && "logo--playing"}`}
  >
    <img src={image} alt="logo" />
  </div>
);

export default Note;
