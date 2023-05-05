import React from "react";

const SearchBar = ({ placeholder, disabled, onValueChange }) => {
  const handleInputChange = (event) => {
    const currentValue = event.target.value;
    onValueChange(currentValue);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      disabled={disabled}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
