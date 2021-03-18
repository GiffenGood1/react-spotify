import React, { useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Spotify from "../../util/Spotify";
import "./App.css";

export default function App(props) {
  const [searchResults, setSearchResults] = useState([]);

  const [playlistTracks, setPlaylistTracks] = useState([]);

  const [playlistName, setPlaylistName] = useState("My New Playlist");

  const addTrack = (track) => {
    if (playlistTracks.find((playlistTrack) => track.id === playlistTrack.id)) {
      return;
    } else {
      setPlaylistTracks((prev) => [...prev, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks(
      playlistTracks.filter((playlistTrack) => playlistTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  const savePlaylist = async () => {
    const trackUris = playlistTracks.map((track) => track.uri);
    const resJson = await Spotify.savePlaylist(playlistName, trackUris);
    setPlaylistName("My New Playlist");
    setPlaylistTracks([]);
  };

  const search = async (term) => {
    const searchResults = await Spotify.search(term);
    setSearchResults(searchResults);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar onSearch={search} />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistTracks={playlistTracks}
            playlistName={playlistName}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
            onSave={savePlaylist}
          />
        </div>
      </div>
    </div>
  );
}
