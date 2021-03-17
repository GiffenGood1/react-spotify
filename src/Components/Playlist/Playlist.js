import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

export default function Playlist({ playlist }) {
  return (
    <div className="Playlist">
      <input defaultValue={"New Playlist"} />
      <TrackList tracks={playlist} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
