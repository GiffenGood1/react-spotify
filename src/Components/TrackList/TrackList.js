import React from "react";
import "./TrackList.css";
import Track from "../Track/Track";

export default function TrackList({ tracks }) {
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track key={track.id} track={track} />
      ))}
    </div>
  );
}
