import React from "react";
import play from "../../assets/images/play.png";
import mute from "../../assets/images/mute.png";
import "./note.css";

const Note = (props) => (
  <div
    onClick={props.handleOnClick}
    className={`logo ${props.isPlaying && "logo-playing"}`}
  >
    <img src={props.isPlaying ? play : mute} alt="logo" />
    <p className={`note-text ${props.isPlaying && "text-playing"}`}>
      Klicka på ljudikonen om du vill höra musiken!
    </p>
  </div>
);

export default Note;
