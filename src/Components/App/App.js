import React, { useState } from "react";
import Playlist from "../Playlist/Playlist";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import "./App.css";

export default function App(props) {
  const [searchResults, setSearchResults] = useState([
    {
      name: "Tiny Dancer",
      artist: "Elton John",
      album: "Madman Across The Water",
      id: 1,
    },
    {
      name: "Bohemian Rhapsody",
      artist: "Queen",
      album: "Best of Queen",
      id: 2,
    },
  ]);

  const [playlistTracks, setPlaylistTracks] = useState([
    {
      name: "asdfasdf asdf",
      artist: "asdf asdf",
      album: "asdf asdfsadf asdf asdf",
      id: 3,
    },
    {
      name: "I wanna Dance",
      artist: "Some Dude",
      album: "Around the world",
      id: 4,
    },
  ]);

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

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistTracks={playlistTracks}
            playlistName={playlistName}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}
