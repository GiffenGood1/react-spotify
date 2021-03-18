import React from "react";
import TrackList from "../TrackList/TrackList";
import "./Playlist.css";

export default function Playlist({
  playlistTracks,
  playlistName,
  onRemove,
  onNameChange,
}) {
  const handleNameChange = ({ target }) => onNameChange(target.value);
  return (
    <div className="Playlist">
      <input defaultValue={playlistName} onChange={handleNameChange} />
      <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
      <button className="Playlist-save">SAVE TO SPOTIFY</button>
    </div>
  );
}
