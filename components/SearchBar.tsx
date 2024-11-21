import React from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <input 
      type="text"
      className="search-bar"
      placeholder="Search tracks..."
      value={searchTerm}
      onChange={onSearchChange}
    />
  );
};

export default SearchBar;