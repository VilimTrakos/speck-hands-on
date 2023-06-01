import React from "react";
import {
  SearchBarDiv as SearchBarWrapper,
  SearchBarInput,
} from "./SearchBarStyle";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder, disabled, onValueChange }) => {
  const handleInputChange = (event) => {
    const currentValue = event.target.value;
    onValueChange(currentValue);
  };

  return (
    <>
      <SearchBarWrapper>
        <FaSearch size="15px" color="#333" />
        <SearchBarInput
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleInputChange}
        />
      </SearchBarWrapper>
    </>
  );
};

export default SearchBar;
