import React from "react";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

import "../components/searchBar.css";

export default function SearchBar({ championNames }) {

  const navigate = useNavigate()
  const handleChange = (selectedOption) => {
    navigate(`champion/${selectedOption.value}`)
  };


  const options = championNames.map((championName) => ({
    value: championName,
    label: championName,
  }));

  return (
    <>
      <form>
        {championNames? (
          <Select
            options={options}
            value={{ value: options.value, label: options.label }}
            onChange={handleChange}
            isClearable
            placeholder="Select or type a champion..."
            className="searchBar"
          />
        ) : (
          <Select
            placeholder="An error has occured cannot retrive champions"
          />
        )}

      </form>
    </>
  );
}
