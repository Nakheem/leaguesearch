import React from "react";
import Select from "react-select";

import "../components/searchBar.css";

export default function SearchBar({ setSearchValue, championNames, searchValue }) {
  const handleChange = (selectedOption) => {
    setSearchValue(selectedOption.value);
  };

  const options = championNames.map((championName) => ({
    value: championName,
    label: championName,
  }));

  return (
    <>
      <form>
        <Select
          options={options}
          value={{ value: searchValue, label: searchValue }}
          onChange={handleChange}
          isClearable
          placeholder="Select or type a champion..."
          className="searchBar"
        />
      </form>
    </>
  );
}
