import React, { useState } from "react";
import "./SearchBar.css";
export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (e) => {
    setTerm(e.target.value);
  };

  const handleClick = (e) => {
    if (term === "") {
      return;
    }
    onSearch(term);
  };
  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
      />
      <button className="SearchButton" onClick={handleClick}>
        SEARCH
      </button>
    </div>
  );
}
