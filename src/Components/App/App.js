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

  const [playlist, setPlaylist] = useState([
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
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist playlist={playlist} />
        </div>
      </div>
    </div>
  );
}
