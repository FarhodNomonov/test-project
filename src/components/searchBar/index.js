import React from "react";
import { SearchIcon } from "../icons";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  const handleSearchChange = (event) => {
    onSearchChange(event.target.value);
  };

  return (
    <div className="search_inp">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Поиск..."
      />
      <SearchIcon />
    </div>
  );
};

export default SearchBar;
