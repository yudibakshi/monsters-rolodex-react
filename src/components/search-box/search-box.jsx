import React from "react";

import "./search-box.css";

const SearchBox = ({ placeholder, value, onSearch }) => {
  return (
    <input
      className="search"
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onSearch(e.currentTarget.value)}
    />
  );
};

export default SearchBox;
