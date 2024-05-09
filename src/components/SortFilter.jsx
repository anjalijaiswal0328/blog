// SortFilter.js
import React from "react";

function SortFilter({ onChange }) {
  const handleSortChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="sort">Sort by:</label>
      <select id="sort" onChange={handleSortChange}>
        <option value="date">Date</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  );
}

export default SortFilter;
